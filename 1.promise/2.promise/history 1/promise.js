/**
 * 1. new Promise实例时将 executor执行器 传入。立即执行
 * 2. 将成功回调和失败回调加上
 * 3. 执行对应回调时修改对应状态，主要panding时不能修改
 * 4. then执行时修改对应状态并将对应的状态传入
 */

const SUCCESS = 'fulfilled'
const FAIL = 'rejected';
const PENDING = 'pending'
class Promise {
  constructor(executor) {
    this.status = PENDING; // 默认是等待态
    this.value= undefined;  // 成功时的数据
    this.reason = undefined // 失败时的原因
    let resolve = (value) => {
        if(this.status === PENDING){ // 只有在padding时才能改变状态
            this.value = value;
            this.status = SUCCESS;
        }
    };
    let reject = (reason) => {
        if(this.status === PENDING){
            this.reason = reason;
            this.status = FAIL;
        }
    };
    executor(resolve,reject); //  进行new实例化时直接调用执行器，并将成功和失败的回调传入
  }
  then(onFulfilled,onRejected){
    if(this.status === SUCCESS){
        onFulfilled(this.value);
    }
    if(this.status === FAIL){
        onRejected(this.reason);
    }
  }
}
module.exports = Promise;
