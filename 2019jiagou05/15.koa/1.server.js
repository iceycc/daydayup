// koa express http
// express4 大而全 (es5来)处理异步都是基于事件
// koa 基于generator -> async + await 
// egg 基于koa来封装的


// const Koa = require('koa');
const Koa = require('./koa/application')
// 默认引入的是application.js
// context.js koa里面为了方便 ctx (里面包含了 req,res)
// request 包装了req中的属性和方法
// response 包装了 res中的属性和方法

// ctx 集成了 req,req,response,request
// req,res 原生的  response/request 都是koa中封装的

// app.use app.listen app.on('error')
const app = new Koa(); // 创建一个app实例
// 如果没有执行任何逻辑返回404
// app.use((req,res)=>{
//     res.end()
// })
app.use(ctx=>{ // 在koa源码中需要创建一个ctx对象 内部封装req和res
    console.log(ctx.req.path); // 原生node中req的请求对象
    console.log(ctx.request.req.path); // 原生node中req的请求对象
    // ----
    console.log(ctx.request.path); // koa封装
    console.log(ctx.url); // ctx.request.url

    ctx.response.body = 'hello'; // 不是res.end()
    ctx.body = '111'; // 这个方法只是给ctx.body赋予值
})
app.listen(3000,()=>{
    console.log('server start 3000');
}); // 创建一个http服务

// 实现创建上下文