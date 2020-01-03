const Koa =require('koa');
const app = new Koa();
app.use(async (ctx,next)=>{
  if(ctx.method == 'GET' && ctx.path == '/form'){
    ctx.body = `
    <form action="/login" method="post">
      <input type="text" name="username"/>
      <input type="text" name="password"/>
      <button>提交</button>
    </form>
  `
  }
  await next()
})

const bodyParser = ()=>{
  return async (ctx,)
}

// const bodyParser = ctx =>{
//   return new Promise((resolve,reject)=>{
//     const arr = []
//     ctx.req.on('data',(chunk)=>{
//       arr.push(chunk)
//     })
//     ctx.req.on('end',()=>{
//       resolve(Buffer.concat(arr).toString())
//     })
//   })
// }
// app.use(async ctx=>{
//   console.log('login')
//   if(ctx.method == 'POST' && ctx.path == '/login'){
//     // console.log('login')
//     // const arr = []
//     // ctx.req.on('data',(chunk)=>{
//     //   arr.push(chunk)
//     // })
//     // ctx.req.on('end',()=>{
//     //   ctx.body = Buffer.concat(arr).toString()
//     // })
//     ctx.body = await bodyParser(ctx)
//   }
// })

app.listen(3001,()=>{
  'http://localhost:3001/'
})