/**
 * 静态服务 static
 *  express.static(__dirname)
 * 
 * 模版引擎
 *  内置的模板引擎
 * 
 */

const express = require('./express');
const path = require('path');
const app = express();
// 内置的静态服务中间件
app.use(express.static(__dirname));
app.use((req,res,next)=>{
  // 新增或者重写方法，后面的都会按这个执行

  // res.send = function(){
  // // todo
  // }
  // res.sendFile = (absPath)=>{
  //   fs.createReadSteam(absPath).pipe(res)
  // }
  next()
})

// 内置的模板引擎
app.set('views','views1');// 设置模板存放位置
// 告诉.html后缀 需要用 __express这个方法来渲染
app.set('view engine','html'); // 省略文件后缀
app.get('view engine') // 获取view engine的值，函数的重载，相同的函数根据传参的不同实现不同的功能
app.engine('.html',require('ejs').__express);
// 模板引擎 koa-views 

app.get('/hello',function(req,res,next){
    console.log('h')
  res.render('index',{name:'zf'});
})
app.listen(3000);