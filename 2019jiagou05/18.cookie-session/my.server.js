const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({prefix:'/user'});
router.get('/read',(ctx,next)=>{
    ctx.body = ctx.cookies.get('name')
    next()
})
router.get('/write',(ctx,next)=>{
    
    ctx.cookies.set('name','wby',{
        signed:true // koa不是sha256了 是sh1。会把cookie的key和value都会加标志
    })
    ctx.cookies.set()
    next()
})
router.post('/add',(ctx,next)=>{
    // curl -Uri 'http://localhost:3000/user/add' -Method 'POST' // windows下powershell执行命令
    console.log(ctx.request.url)
    console.log(ctx.request.method)
    ctx.body = 'add'
    next()
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
