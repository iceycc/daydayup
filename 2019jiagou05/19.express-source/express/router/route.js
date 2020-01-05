/**
 * Route类
 * 1. 存放路由layer的栈
 *  this.stack = []
 * 2.method方法匹配:创建layer，放入到stack里 
 *  Route.prototype[method] = function(){}
 *  创建layer: path默认/ （因为外层已经精确匹配到path了，这里其实主要时将指定path下的所以所有method和handler建立联系）；handle表示的时路由方法都匹配的执行内容
 *  let layer = new Layer("/", handler); 
 *  layer.method = method; // 添加该路由对应的方法。
 * 3. 依次执行路由栈中的内容
 *  Route.prototype.dispatch 

 * 
 */
const Layer = require("./layer");
const methods = require('methods');
function Route() {
  this.stack = [];
  this.methods = {}; // 为了实现匹配方法的时候可以尽量少匹配
}
Route.prototype.match = function(method){
  return this.methods[method.toLowerCase()]
}
methods.forEach(method=>{
  Route.prototype[method] = function(handlers) {
    handlers.forEach(handler => {
      let layer = new Layer("/", handler); // 方便扩展
      layer.method = method;
      this.methods[method] = true;
      this.stack.push(layer);
    });
  };
})

Route.prototype.dispatch = function(req, res, out) {
  // 从路由栈中 挨着取出执行
  let idx = 0;
  let next = (err) => {
    if(err) return out(err) // 无论是中间件还是路由都是在最外层的系统中处理信息
    if (idx >= this.stack.length) return out(); // 内部执行后 会从内部出去到外层
    let layer = this.stack[idx++];
    // 方法匹配
    if (layer.method === req.method.toLowerCase()) {
      layer.handler(req,res,next); // 执行对应方法
    } else {
      next();
    }
  };
  next();
};
module.exports = Route;
