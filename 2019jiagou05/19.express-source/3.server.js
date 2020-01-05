/**
 * 路由中间件的实现
 */
const express = require('./express');
const app = express(); 
// 路由中的next 和 中间件的next 是什么关系 ？？？ 
// app.use()的next 是外层layer的next。
// app.get/post()等的next 是内层layer的next。

// 中间件
// use路由开头匹配上就行
// get必须严格匹配
app.use('/',function(req,res,next){
    console.log('middle')
   next();
})
app.use('/a',function(req,res,next){
    console.log('middle 2');
    next();
})
app.get('/a/b',function(req,res,next){
    next('error');
})


// 如果中间件出错了 在next传参数，就会跳过后面所有中间件 走到最后的 错误处理中间件
// 一般放在页面的最底部
// 如果出错 直接跳出执行的下面的逻辑，并将err依次往下传
app.use(function(err,req,res,next){
    console.log(1);
    next(err);
})
app.listen(3000);
