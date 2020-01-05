/**
 * 1. 存储成功的所有的回调 存储所有失败的 只有pending的时候才存储
 * 2. throw等异常处理
 * 3. panding状态启动发布订阅模式
 * 4. try catch不能捕获异步等异常
 */

const SUCCESS = 'fulfilled'
const FAIL = 'rejected';
const PENDING = 'pending'
class Promise {
  constructor(executor) {
    this.status = PENDING; // 默认是等待态
    this.value= undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = []; // 存储成功的所有的回调 只有pending的时候才存储
    this.onRejectedCallbacks = []; // 存储所有失败的
    let resolve = (value) => { // 成功
        if(this.status === PENDING){
            this.value = value;
            this.status = SUCCESS;
            // 发布状态
            this.onResolvedCallbacks.forEach(fn=>fn());
        }
    };
    let reject = (reason) => { // 失败
        if(this.status === PENDING){ 
            this.reason = reason;
            this.status = FAIL;
            // 发布状态
            this.onRejectedCallbacks.forEach(fn=>fn());
        }
    };
    try{ // 错误时也进行
        executor(resolve,reject);
    }catch(e){
        reject(e);
    }
  }
  then(onFulfilled,onRejected){ // 默认看一下状态调用对应的函数
    if(this.status === SUCCESS){
        onFulfilled(this.value);
    }
    if(this.status === FAIL){
        onRejected(this.reason);
    }
    if(this.status === PENDING){
        //  将then后面的方法订阅。
        this.onResolvedCallbacks.push(()=>{
            onFulfilled(this.value);
        });
        this.onRejectedCallbacks.push(()=>{
            onRejected(this.reason);
        })
    }
  }
}
module.exports = Promise;


