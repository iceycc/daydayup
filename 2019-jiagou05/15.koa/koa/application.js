const http = require('http');
const context = require('./context'); // 上下对象
const request = require('./request'); // reques对象
const response = require('./response'); // response对象
// 错误处理一定会继承 Event
const EventEmitter = require('events'); // 
const Stream = require('stream');
module.exports = class  extends EventEmitter{
    constructor(){
        super();
        // 生产了一个对象，操作context对象不会导致源文件的变化
        this.context = Object.create(context);
        this.request = Object.create(request);
        this.response = Object.create(response);
        this.middlewares = [];// 保存 每个中间件 use
    }
    use(middleware){
        // [fn,fn,fn];
        this.middlewares.push(middleware)
    }
    // 创建上下文
    createContext(req,res){
        let ctx = this.context;
        ctx.app = request.app = response.app = this;
        ctx.request = this.request; // 将封装的request文件放到ctx对象上
        ctx.response = this.response;
        ctx.request.req = ctx.req = req;
        ctx.response.res = ctx.res = res;
        // 希望request上也拥有 url属性
        // 创建好的上下文返回去即可
        return ctx;
    }
    compose(ctx){ // ctx代表的是上下文对象
        // let dispatch = async (index)=>{
        //     if(index == this.middlewares.length) return Promise.resolve();
        //     let middle = this.middlewares[index];
        //     return middle(ctx,()=>dispatch(index+1));
        // }
        // return dispatch(0)

        let index = 0;
        let i = -1;
        // 作业：用reduce 实现这个逻辑
        // 在同一个方法中掉两次next 
        // 组合中间件函数额。将use内的所有中间件组合 返回一个大的promise。
        // 依次派发 middlewares里的函数。最后返回一个promise函数
        const  dispatch =()=>{ // dispatch执行后需要返回一个promise
            console.log(index);
            if(index <= i ) return Promise.reject('multiple call next()') 
            i = index;// 为了防止多次调用 多次调用index值不会发生变化，但是i第一次已经和index相等了，所以第二次在调用 i 和 index相等 就抛出错误
            // 如果最后一个use方法调用了next方法就结束即可。
            if(index === this.middlewares.length) return Promise.resolve(); // 终止条件 
            let middleware = this.middlewares[index++] // 取出第一个来执行
           
            // 如果这个中间件不是promise 那我就把他包装成一个promise
            return Promise.resolve(middleware(ctx,()=>dispatch())); // 调用此中间件方法
        }
        return dispatch();
    }
    handleRequest(req,res){ // 处理请求的方法
        let ctx = this.createContext(req,res);
        // this.fn(ctx); // 在内部会给ctx属性设置值
        // 把所有的中间件进行组合 成功后将结果返回即可
        res.statusCode = 404; // 默认404。 如果调用了 ctx.body = 'xxx'时设置为200
        this.compose(ctx).then(()=>{
            let _body = ctx.body
            if(typeof  _body=== 'string' || Buffer.isBuffer(_body)){
                return res.end(_body);
            }else if(typeof _body ==='number'){
                return res.end(_body+'');
            }else if( _body instanceof Stream){
                // 下载header
                res.setHeader('Content-type', 'application/octet-stream');
                res.setHeader('Content-Disposition', 'attachment;filename='+encodeURIComponent('下载'));
                _body.pipe(res);
                return
            }else if(typeof _body === 'object'){
                return res.end(JSON.stringify(_body));
            }
            res.end('Not Found')
        }).catch(err=>{
            this.emit('error',err)
        })
    }
    // y
    // callBack(){
    //         // 做组合的
    //         const fn = compose(this.middleware);
    //         // 
    //         if (!this.listenerCount('error')) this.on('error', this.onerror);
    //         const handleRequest = (req, res) => {
    //         // 创建上下文
    //         const ctx = this.createContext(req, res);
    //         return this.handleRequest(ctx, fn);
    //         };

    //         return handleRequest;
    // }
    listen(){
        let server = http.createServer(this.handleRequest.bind(this));
        server.listen(...arguments)
    }
}