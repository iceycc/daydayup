const Koa = require('koa');
const app1 = new Koa();
// 洋葱模型 1
app1.use((ctx,next)=>{
    console.log('app1:3001----start')
    console.log(1)
    next()
    console.log(2)
})
app1.use((ctx,next)=>{
    console.log(3)
    next()
    console.log(4)
})
app1.use((ctx,next)=>{
    console.log(5)
    next()
    console.log(6)
})
app1.listen(3001);
//  app1:3001----start
//  1 
//  3 
//  5 
//  6 
//  4 
//  2


// 异步
const app2 = new Koa();

const fn = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3)
        })
    })
}
 app2.use((ctx,next)=>{
    console.log('app2:3002----start')
    console.log(1)
    next() // 此时next已经成为了异步代码。 不会等待该异步
    console.log(2)
})
app2.use(async(ctx,next)=>{
    let f = await fn()
    console.log(f) // 3
    next()
    console.log(4)
})
app2.use((ctx,next)=>{
    console.log(5)
    next()
    console.log(6)
})
app2.listen(3002);
//  app2:3002----start
//  1 
//  2
//  3 
//  5
//  6 
//  4


// 建议所有的next函数之前都增加await属性，防止next被包装成promise异步函数
// 所有中间件都包装成promise
const app3 = new Koa();
const fn3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(3)
        })
    })
}
app3.use(async(ctx,next)=>{
    console.log('app3:3003----start')
    console.log(1)
    await next() // 此时next已经成为了异步代码。 不会等待该异步
    console.log(2)
})
app3.use(async(ctx,next)=>{
    let f = await fn3() 
    console.log(f) // 3
    next()
    console.log(4)
})
app3.use((ctx,next)=>{
    console.log(5)
    next()
    console.log(6)
})
app3.listen(3003);
// app3:3003----start
// 1
// 3
// 5
// 6
// 4
// 2