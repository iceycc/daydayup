const Koa = require('koa');
const Router = require('koa-router');
const jwt = require('jwt-simple');
const bodyParser = require('koa-bodyparser');

const app = new Koa()
const router = new Router()

const sercet = 'jwt' //密钥
router.post('/login',async ctx=>{
    console.log(ctx.request.body)
    let {username,password} = ctx.request.body
    // 加密
    // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6IndieSJ9.zmqkwQNKufzsnQVEqQfNEvnJGDVl29MukhPFHJ6oGnM
    ctx.body = jwt.encode({username},sercet)
    
})
app.use(bodyParser()); // 解析参数的
app.use(router.routes());

app.listen(3000)