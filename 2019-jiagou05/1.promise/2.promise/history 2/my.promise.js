const PANDING = 'panding';
const SUCCESS = 'fulfilled';
const FAIL = 'rejected';
class Promise {
  constructor(executor) {
    // 状态：
    this.status = PANDING;
    this.value = undefined;
    this.reason = undefined;
    this.onFUlfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      // only status is panding,can change
      if (this.status === PANDING) {
        this.value = value;
        this.status = SUCCESS;
      }
    }
    const reject = (reason) => {
      if(this.status === PANDING){
        this.reason = reason;
        this.status = FAIL;
      }
    }
    try{
      executor(resolve, reject)
    }catch(e){
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    if (this.status === SUCCESS) {
      // success
      onFulfilled(this.value);
    }
    if (this.status === FAIL) {
      // fail
      onRejected(this.reason);
    }
    if(this.status === PANDING){
      // 
    }

  }
}


let p = new Promise((resolve, reject) => {
  // throw new Error('异常');
  resolve('成功');
  reject('失败')
})

p.then((value) => {
  console.log('fulfill',value)
}, (err) => {
  console.log('err',err)
})
// 