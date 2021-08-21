/**
1. promise解决了什么问题
    * 1) 回调嵌套 回调地狱
    * 2）错误捕获不好处理错误
    * 3）多个异步并发的问题 Promise.all

2. promise规范：promiseA+
3. promise的三个状态：等待Pending 成功fulfilled 失败rejected    
4. executor 执行器   
5. 每个promise的实例上都有.then
6. 执行resolve() => fulfilled 成功态 . 执行reject => rejected（拒绝）失败态
 */


// Promise 解决的问题
// 1) 回调嵌套 回调地狱
// 2）错误捕获不好处理错误
// 3）多个异步同步的问题 Promise.all
// 还是基于回调的方式的

// Promise是一个类 默认浏览器 高版本 node 都自带了
// es6-promise

// Promise的概念 规范文档 promise A+ 规范
// Promise 三个状态 等待 成功态 失败态
// 只有等待态 才能变成成功 / 失败
// 如果状态变化后不能在修改状态

// 如果要使用一个模块
let Promise = require('./promise')

let p = new Promise((resolve,reject)=>{ // executor 执行器
    // pendding 
    console.log('executor'); //  这里是同步的 立即执行
    resolve('赚钱了');// 变成成功
    reject('没有钱'); // 不能变成失败
})
// 每个promise的实例上都有一个then方法
p.then((value)=>{ // fulfilled
    console.log('成功',value);
},(reason)=>{ // rejected
    console.log('失败',reason);
});
