// 浏览器在执行script脚本的时候 就是一个宏任务
// 宏任务 ui渲染 script 事件 ajax setitmeout
// promise.then

// vue.$nextTick(()=>{})

// 事件环 宏任务 微任务

// promise
// mutationObserver 微任务 等待dom操作都结束后通知
// setImmediate 立即 // ie 独有
// MessageChannel 宏任务  消息通道
// setTimeout
// webWorker 单独开线程。只能计算 不能操作dom

// 高程3 
// 犀牛书

// 你不知道js