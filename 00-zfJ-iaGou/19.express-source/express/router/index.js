/**
 * 路由系统
 * Router类
 * 1. 创建存放层layer的栈
 *  每次use创建中间件，get或者post等创建自定义路由都会推入一个layer
 *  存放的可能时中间件层也可能时自定义路由层
 *  this.stack = []
 *
 * 2.处理中间件app.use()：生成一个中间件layer放入stack里。
 *  创建一个layer层实例,存放了中间件中的路径path和具体要执行的内容
 *  let layer = new Layer(path,handle)
 *  每次app.use都会将一个layer推入栈
 *  this.stack.push(layer)
 *
 * 3. 处理用户自定义路由请求app.get()：生成一个路由处理layer放入stack里。
 *  [method] : get/post/put ...
 *  创建一个route实例，专门处理内层，匹配对应method方法的
 *  let route = new Route();
 *  创建层实例,存放了的路径path和当前路径对应的route.dispatch 用于匹配
 *  let layer = new Layer(path,route.dispatch.bind(route))
 *  当前layer有个route属性
 *  layer.route = route;
 *  每次执行一次路由创建方法，都会推入对应的stack
 *  this.stack.push(layer);
 *
 * 4. 子路由系统多级路由
 *  Router函数既可以当函数执行 又可以 当类
 *  /user/add => app.use('/user') app.get('/add')
 *  普通中间件要执行的时候 需要删除签前面写的路径
 *  下次执行next的时候再补全。
 * 5. 参数处理app.param('id',callback)：发布订阅
 *  回调函数执行栈：proto.paramsCallback = {};
 *  订阅：proto.paramsCallbackpush(handler)
 *
 */

let Route = require("./route");
let Layer = require("./layer");
let url = require("url");
const methods = require("methods");
// 大Router 整个的路由系统。
function Router() {
  // let user = express.Router()
  // 该函数既能充当类 又能充当函数
  let router = (req, res, next) => {
    router.handler(req, res, next); // 处理这个新的路由系统，如果内部处理不了 ，在执行外层的中间件即可
  };
  router.stack = []; // 这个属性 需要放在router上
  Object.setPrototypeOf(router, proto); // 继承
  // router.__proto__ = proto; // 如果用户new这个类
  return router; // new Router
  // 类如果返还一个函数 那么实例就都指向了这个函数
}

// 因为等会会调用router上的方法
let proto = {}; // Router即使函数又是类。传统的prototype在作为函数执行时就获取不到了
proto.paramsCallback = {};
proto.param = function (key, handler) { 
  // 发布订阅 {id:[fn,fn],name:[fn]}
  // this是谁
  (this.paramsCallback[key] || (this.paramsCallback[key] = [])).push(handler); // 订阅模式
};
// 处理参数 out
proto.handle_param = function (layer, req, res, out) {
  // 需要将订阅好的执行
  // 怎么知道有哪些param属性对应的方法需要执行？
  // /user/:id/:name => keys=>[{name:id},{name:name}]
  // console.log(layer.keys)
  if (!layer.keys || layer.keys.length == 0) {
    return out(); // 当前没有需要执行的param方法
  }
  let keys = layer.keys.map((item) => item.name);
  let idx = 0;
  let key;
  let callbacks;
  let param = () => {
    // [id,name]
    if (idx >= keys.length) return out();
    key = keys[idx++];
    callbacks = this.paramsCallback[key]; //id => [fn,fn]
    if (!callbacks) {
      param();
    } else {
      execCallbck(); // 执行callback
    }
  };
  let i = 0;
  let execCallbck = () => {
    let fn = callbacks[i++];
    if (fn) {
      fn(req, res, execCallbck, layer.params[key], key);
    } else {
      i = 0; // 执行完一个循环 初始化以下 0
      param();
    }
  };
  param(); // 4.15 express 模板引擎 内置的中间件
};
proto.route = function (path) {
  let route = new Route(); // 创建一个route
  // 创建一个Layer 路径 对应的dispatch方法
  let layer = new Layer(path, route.dispatch.bind(route));
  layer.route = route;
  this.stack.push(layer);
  return route;
};
proto.use = function (path, handler) {
  if (typeof handler == "undefined") {
    handler = path;
    path = "/";
  }
  let layer = new Layer(path, handler);
  layer.route = undefined; // 中间件没有route属性
  this.stack.push(layer);
};
methods.forEach((method) => {
  proto[method] = function (path, handlers) {
    if (!Array.isArray(handlers)) {
      // 因为用户可能不是通过app来调用get方法，所以传递过来的handlers可能是一个函数
      handlers = [handlers];
    }
    // 创建一个层，把层放到stack中。层里
    // 在创建一个route 里面专门存放handler。
    // layer.route = route。路径path匹配到就会执行handler
    // 调用route方法 返回当前层对应的route的实例
    let route = this.route(path);
    route[method](handlers); // 把这个handler 存放到当前的route的stack中
  };
});

proto.handler = function (req, res, out) {
  // 请求到来会执行此方法
  // 先取出用户请求的路径
  let { pathname } = url.parse(req.url);
  let idx = 0;
  // 如果自己处理不了
  // 我需要看一下当前是不是路由 如果是路由需要匹配方法
  let removed;
  let next = (err) => {
    // next时 将之前删除的前面的路由补上
    if (removed && removed.length) {
      req.url = removed + req.url;
      removed = "";
    }
    if (idx >= this.stack.length) return out(); // 匹配不到的 就出去了 done
    let layer = this.stack[idx++]; // 在栈中拿到第一层
    // 无论是中间件 还是路由 都统一在最外层的路由系统中处理错误
    if (err) {
      // 错误时 判断时中间件还是路由
      // 如果有错误 就找中间件
      if (!layer.route) {
        // 说明是中间件 不是路由
        // 如果找到了错误处理就让错误中间件执行即可，错误中间件 就不继续next了.
        if (layer.handler.length === 4) {
          // 规定四个参数的就是错误中间件
          layer.handler(err, req, res, next);
        } else {
          next(err);
        }
      } else {
        // 是路由继续向下找
        next(err);
      }
    } else {
      // --- 1 先匹配路由名
      if (layer.match(pathname)) {
        // 中间件和路由的区别就是看是否匹配到了方法
        if (!layer.route) {
          // 如果是中间件 如果是错误处理中间件 默认正常情况下是不执行的
          if (layer.handler.length === 4) return next();
          // 普通中间件要执行的时候 需要删除签前面写的路径
          if (layer.path !== "/") {
            // 如果是 / 的话 就别删了 ）
            removed = layer.path;
            // /user/add => app.use('/user') app.get('/add')
            req.url = req.url.slice(removed.length);
          }
          layer.handler(req, res, next);
        } else {
          // --- 2 再匹配方法
          if (layer.route.match(req.method)) {
            req.params = layer.params;
            // 如果是路由就执行(在执行之前需要将订阅的内容 进行执行)
            proto.handle_param(layer, req, res, () => {
              // out方法
              layer.handler(req, res, next);
            });
          } else {
            next();
          }
        }
      } else {
        next();
      }
    }
    // // 模糊匹配方法，判断下route上有没有
    // if (layer.match(pathname) && layer.route.match(req.method)) {
    //   // 如果路径相同, 将下一个layer逻辑 就是next方法传递进去
    //   layer.handler(req, res, next); // 执行当前layer上的route的dispatch方法
    // } else {
    //   next();
    // }
  };
  next();
};
module.exports = Router;
