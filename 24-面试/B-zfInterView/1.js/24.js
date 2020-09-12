/**
 * 控制并发数
 */
//let Semaphore = require('semaphore');
class Semaphore {
    constructor(available) {
        this._available = available;
        this.waiters = [];
        //this._continue = this._continue.bind(this);
    }
    //接收任务
    take(task) {
        if (this._available > 0) {
            this._available--;
            task();
        } else {
            this.waiters.push(task);
        }
    }
    leave() {
        /* this._available++;//释放可用的资源，可用资源数+1
        this._continue(); */
        this._available++;
        let task = this.waiters.shift();
        if (task)
            this.take(task);
    }
    /*  _continue() {
         if (this._available > 0) {
             if (this.waiters.length > 0) {
                 this._available--;
                 this.waiters.shift()();
             }
         }
     } */
}
let semaphore = new Semaphore(2);
console.time('cost');
semaphore.take(() => {
    setTimeout(() => {
        console.log(1);
        semaphore.leave();
    }, 1000);
});
semaphore.take(() => {
    setTimeout(() => {
        console.log(2);
        semaphore.leave();
    }, 2000);
});
semaphore.take(() => {
    setTimeout(() => {
        semaphore.leave();
        console.log(3);
        console.timeEnd('cost');
    }, 3000);
});