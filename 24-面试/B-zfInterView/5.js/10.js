/**
 * 支持setTimeout
 * setTimeout执行的时候，会交给一个单独的线程去计数,等到期到再放到我们的宏任务队列
 * macroTasks 宏任务队列
 */
let macroTasks = [];
let delayed_incoming_queue = [];
function showName() {
    console.log('zhufeng');
}
function setTimeout(callback, timeout) {
    delayed_incoming_queue.push({
        callback, start: Date.now(), timeout
    });
}
setTimeout(showName, 1000);

//模拟我们的事件循环 
setInterval(() => {
    let task = macroTasks.shift();//1,2,3
    task && task();
    //会在每宏任务完成后检查延时队列,然后把到期的放入宏任务队列
    delayed_incoming_queue = delayed_incoming_queue.filter(item => {
        if (item.start + item.timeout <= Date.now()) {
            macroTasks.push(item.callback);
            return false;
        }
        return true;
    });
}, 16);
//浏览器每秒渲染60帧，1000/60=16ms


