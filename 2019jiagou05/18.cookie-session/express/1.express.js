// 内部继承了路由系统
// 内置中间件
const express = require('express');
const app = express();
// 1 3 5 6 4 2
// 不支持promise 等待效果
// 1) 决定是否向下执行
// 2) 可以扩展属性 和方法
// 3) 可以进行权限校验 
// 4) 可以匹配对应的路径

// 决定哪个路径可以匹配到
app.use('/a',function(req,res,next){
    console.log(1);
    next('内容');
    console.log(2)
})

// app.use('/b',function(req,res,next){
//     console.log(3);
//     next();
//     console.log(4)
// })
app.get('/b/:id/:name/address',function(req,res,next){
    // http://localhost:3000/b/1/3/address
    console.log(30);
    console.log(req.params)
    next();
    console.log(40)
})
app.post('/b',function(req,res,next){
    console.log(300);
    next();
    console.log(400)
})
app.use(function(req,res,next){
    console.log(5);
    next();
    console.log(6)
})
// 如果任何一个next函数出错了 会跳过 所有中间件，执行参数为四个的中间件。判断参数为4个
app.use((err,req,res,next)=>{
    console.log(err); //专门处理错误的
    next()
})
app.all((req,res,next)=>{
    next()
})
app.all((req,res,next)=>{
    next()
})
app.listen(3000);
