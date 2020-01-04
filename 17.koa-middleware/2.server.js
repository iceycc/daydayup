const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const rootRouter = new Router();
const userRouter = require('./routes/user')

// 1）prefix 可以增加前缀
// 2）router.use() 可以注册二级路由


// 方法一 一个路由下的 拓展性不强
// const router = new Router({prefix:'/user'}) // 类似命名空间
// router.get('/add',(ctx)=>{ctx.body = 'add'})
// router.get('/delete',ctx=>{ctx.body = 'delete'})


// 
// 一个大路由 控制一个小路由
// 可以将文件进行分层
// rootRouter.get('/add',ctx =>{ctx.body = 'add'})
// rootRouter.get('/delete',ctx =>{ctx.body = 'delete'})
// 具体子路由可以抽离到路由文件
rootRouter.use('/user',userRouter.routes()); // 二级路由的写法

app.use(rootRouter.routes()).use(rootRouter.allowedMethods())
app.listen(3000);


// koa-generator生产一个koa项目模板
// npm install -g koa-generator
// koa2 -e project-name