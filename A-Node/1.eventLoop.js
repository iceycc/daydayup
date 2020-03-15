// 以下执行顺序和主进程执行顺序有关系
setTimeout(()=>{
    console.log('setTimeout')
},0)
setImmediate(()=>{
    console.log('setImmediate')
})

// 
let fs = require('fs')
fs.readFile('./eventLoop',()=>{
    setTimeout(()=>{
        console.log('setTimeout')
    },0)
    setImmediate(()=>{
        console.log('setImmediate')
    })
    
})

// processs.nextTick独立于EventLoop，有自己的队列，优先级比其他微任务高
// n1 n2


1 2  3