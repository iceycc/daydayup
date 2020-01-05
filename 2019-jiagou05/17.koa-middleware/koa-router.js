class Layer{
    constructor(method,pathname,callback){
        this.method = method;
        this.pathname = pathname;
        this.callback = callback;
    }
    match(path,method){
        // 让他自己具备着匹配的能力
        return path === this.pathname && this.method === method.toLowerCase();
    }
}
class Router{
    constructor(){
        this.stack = [];// 这里面存放着所有的路由关系
    }
    get(pathname,callback){
        // this.stack.push({
        //     callback,
        //     pathname,
        //     method:'get',
        // }) // 下面抽离出一个类，方便拓展
        // 我们次调用get方法都会像内部数组放一层
        let layer = new Layer('get',pathname,callback)
        this.stack.push(layer)  // 
    }
    compose(fns,ctx,next){
        // compose原理
        let dispatch = (index)=>{
            if(index === fns.length) return next();
            let callback = fns[index].callback;
            return Promise.resolve(callback(ctx,()=>dispatch(index+1)))
        }
        return dispatch(0);
    }
    routes(){
       return async (ctx,next)=>{
            // 获取请求的路径，然后去stack依次匹配
            let path = ctx.path; // /hello
            let method = ctx.method; // get
            let fns = this.stack.filter(layer=>layer.match(path,method));
            this.compose(fns,ctx,next)
       } 
    }
}
module.exports = Router;