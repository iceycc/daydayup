const http = require('http');
// 代理服务器
// https://github.com/http-party/node-http-proxy
const httpProxy = require('http-proxy')
// const proxy = httpProxy.createProxy();
const proxy = httpProxy.createProxyServer();

// http-proxy http.request
let map = {
    '3000.web.com:81':'http://localhost:3000',
    '4000.web.com:81':'http://localhost:4000'
}
// a.zhufeng b.zhufeng
http.createServer((req,res)=>{
    console.log(req.headers.host); // a.zhufeng.cn
    proxy.web(req,res,{
        target:map[req.headers.host]
    })
}).listen(81);

//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://localhost:3000'}).listen(8000); // See (†)


// koa express http
// express4 大而全 (es5来)处理异步都是基于事件
// koa 基于generator -> async + await 
// egg 基于koa来封装的

