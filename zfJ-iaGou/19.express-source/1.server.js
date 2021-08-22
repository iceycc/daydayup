/**
 * 简单版
 */
const express = require('./express');
const app = express(); // app 其实是一个实例 是一个应用的实例
// function app(){}
// app.prototype.use = function(){

// }
// app.prototype.get = function(){

// }
// app.prototype.listen = function(){

// }

// express执行栈
// 匹配：路径 + 方法 + 处理函数 =》
// 匹配不到
// app.set('set','hhh')
// console.log('-----------',app.get('set'))
app.get('/',function(req,res){
    res.end('hello');
});
app.get('/hello',function(req,res){
    res.end('hello2');
});
app.get('/world',function(req,res){
    res.end('world');
});
app.listen(3000,()=>{
    console.log(3000)
});
