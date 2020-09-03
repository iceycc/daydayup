const { fork } = require('child_process');
/**
 * 支持setTimeout
 * setTimeout执行的时候，会交给一个单独的线程去计数,等到期到再放到我们的宏任务队列
 * macroTasks 宏任务队列
 */
let macroTasks = [];
function showName() {
    console.log('zhufeng');
}
function setTimeout(callback, timeout) {
    let child = fork('./setTimeout.js');
    child.on('message', (message) => {
        if (message.ready) {
            macroTasks.push(callback);
        }
    });
    child.send({ type: 'start', timeout });
}
setTimeout(showName, 1000);

//模拟我们的事件循环 
setInterval(() => {
    let task = macroTasks.shift();//1,2,3
    task && task();
}, 16);
//浏览器每秒渲染60帧，1000/60=16ms
