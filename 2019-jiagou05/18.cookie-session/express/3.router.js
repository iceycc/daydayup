const express = require('express');
const app = express();

// 路由的路径 必须要严格匹配
// 路由中也有next方法
app.use((req,res,next)=>{
    console.log('use');
    next();
})
// vue react 路径参数
app.get('/:id/:name/address',(req,res,next)=>{
    console.log(req.params)
    next();
})
app.get('/',(req,res,next)=>{
    console.log(2);
})
app.listen(3000);

// 将内容路径转化成正则 匹配到请求路径 将加过拿到交给用户
let config = '/:id/:name/address';
let requestUrl = '/1/2/address'; // {id:1,name:2}
let keys = [];
let str = config.replace(/:([^\/]+)/g,function(){
    keys.push(arguments[1]);
    return '([^\/]+)'
});
console.log(str)
console.log(keys)
let r = requestUrl.match(new RegExp(str)).slice(1);
let params = {};
keys.forEach((key,index)=>{
    params[key] = r[index];
});
console.log(params);


// 获取路由匹配正则
let config = '/:id/:name/address';
let pathToRegExp = require('path-to-regexp');
let requestUrl = '/1/2/address'
let keys = []
let reg = pathToRegExp(config,keys)
console.log(reg)  // /^\/(?:([^\/]+?))\/(?:([^\/]+?))\/address\/?$/i
console.log(requestUrl.match(requestUrl));