const Koa = require("koa");
const app = new Koa();
const fs = require('fs').promises;
// const static = require('koa-static'); // koa的静态文件。
const mime = require("mime");
const path = require('path');
const static = (dirname)=>{
  // 中间件 必须返还一个async 函数
    return async (ctx,next)=>{
      try{
        // 静态服务
        // 1 获取请求的路径
        // 2 判断请求的路径类型是文件夹还是文件
        // 3  文件夹：的话判断里面是否有index.html,有的话就返回，没有的话返回404
        // 4  文件：读取文件响应 双工 pipe
        // 5 请求路径不存在，自己无法处理，交给下面的。或者返回404

        let filePath = ctx.path;
        filePath = path.join(dirname,filePath);
        let statObj = await fs.stat(filePath);
        if(statObj.isDirectory()){
         filePath = path.join(filePath,'index.html');
        }
        console.log('>>>>>>',filePath)
        let mimeType = mime.getType(filePath)
        console.log(mimeType)
        // ctx.set({
        //   'Content-Type': mimeType + ';charset=utf-8'
        // })
        ctx.body = await fs.readFile(filePath,'utf8');
        // 这里不需要在调用next方法
      }catch(e){
          await next(); // 自己无法处理 继续交给下一个人处理
        //  return next(); // 自己无法处理 继续交给下一个人处理
      }
    }
}
app.use(static(__dirname)) // 
app.use(static(path.resolve(__dirname,'../11.stream')));
// 中间件的特点是个函数，
// async函数
// 作权限，是否需要next



// 中间件 ： reduce + promise / async+await  compose函数
// 自己写一篇文章

app.use((ctx)=>{
  ctx.body = 'cant find pages'
})

app.listen(3000);


