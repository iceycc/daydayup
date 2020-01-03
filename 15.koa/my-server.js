const Koa = require('./mykoa/application')

const app = new Koa()
app.use(async(ctx,next)=>{
  // console.log(ctx.req); // 原生node中req的请求对象
  console.log(ctx.request.req.url); // 原生node中req的请求对象
  // ----
  console.log(ctx.request.path); // koa封装
  console.log(ctx.url); // ctx.request.url
  // ctx.set({

  // })
  ctx.body = fs.createReadStream('./package.json')
  await next()
})
app.listen(3000)