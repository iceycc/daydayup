/**
 * 宏任务：script 、ajax、事件、requestFrameAnimation、setTimeout、setInterval、setImmediate、MessageChannel、I/O、ui rendering
 * 微任务：promise.then、MutationObserver（坚挺dom节点变化）、process.nextTick
 * 
 * 微任务会比宏任务快？ js中会先执行script脚本
 * 
 * node事件环： timer poll check
 * 
 * 每个宏任务执行完后 会 清空微任务
 */


// node的事件环 libuv实现的一个事件环机制
setImmediate(()=>{
    console.log('setImmediate')
});
setTimeout(()=>{ // 1 - 4ms
    console.log('timeout')
});
// 真正的执行顺序是不一定的

let fs = require('fs');

fs.readFile('./package.json','utf8',()=>{
    setImmediate(()=>{
        console.log('setImmediate')
    });
    setTimeout(()=>{ // 1 - 4ms
        console.log('timeout')
    });
});

// 每个宏任务执行后都会清空微任务


// 如果希望当前主栈中代码执行后 就可以使用nextTick 微任务
// setImmediate(()=>{}) 宏任务
Promise.resolve().then(()=>{
    console.log('then')
})

process.nextTick(()=>{
    console.log('nextTick')
});
// puppetter
//timers poll check阶段