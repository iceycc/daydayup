/**
 * 1. all的实现：并发 + 按顺序：多个异步并发就用计数器
 * 2. race的实现
 * 3. 模拟超时中断：如何中断一个promise。执行过程中，中断 
 *     warp函数  abort方法
 *     axios基于xhr的 abort取消
 *     fetch基于promise的，无法取消，但是可以不使用。
 * 4. all和race都是处理并发请求的
 */

// promise - all; 全部 解决多个异步 同步的问题,“同步”多个异步的结果
let fs = require('fs').promises; // 新版本 10 版本新增的 
// 计数器

/**
 * 判断是不是promise
 * @param {*} value 
 */
function isPromise(value){
    // 1 是funciton
    // 2 是objec且不为null
    // 3 存在.then的方法
    if(typeof value === 'function' || (typeof value === 'object' && value !== null)){
        if(typeof value.then === 'function'){
            return true;
        }
    }
    return false;
}
/**
 * all 全部成功返回，否则失败
 */
Promise.all = function(values){
    // 1 return 一个promise
    return new Promise((resolve,reject)=>{
        // 2 arr承载成功后的值：核心逻辑计数器 after函数。成功一次计数一次
        let arr = []; // arr[3] = 2  arr.length = 4
        let i = 0; // 计数
        //  执行成功后将数据保存正在arr内，并计数
        let processData = (key,value)=>{
            arr[key] = value; // after函数
            if(++i === values.length){ 
                resolve(arr);
            }
        }
        // 3 依次执行promise / 判断promise结束 
        for(let i = 0 ; i < values.length;i++){
            let current = values[i];
            if(isPromise(current)){
                current.then(y=>{
                    processData(i,y);
                },reject);
            }else{
                processData(i,current);
            }
        }
    })
}
Promise.all([fs.readFile('./name.txt','utf8'),fs.readFile('./age.txt','utf8'),1,2]).then(data=>{
    console.log('all',data);
});

/**
 * race 一个成功就成功,一个失败就失败
 */

fs.readFile('./name.txt','utf8').then(data=>{
    console.log(data);
})
Promise.race = function(values){
    return new Promise((resolve,reject)=>{
        for(let i = 0 ; i < values.length;i++){
            let current = values[i];
            if(isPromise(current)){
                current.then(resolve,reject);
            }else{
                // 不是promise1的话直接成功
               resolve(current);
            }
        }
    })
}
Promise.race([fs.readFile('./name.tx1t','utf8'),fs.readFile('./age.txt','utf8')]).then(data=>{
    console.log('race',data);
},err=>{
    console.log('race',err);
});

/**
 *  如何终止一个promise （中断promise） promise 超时
 * 
 */
let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(123);
    }, 3000);
})
// 给promise包一下，传入一个promise，返回一个promise
function wrap(promise){
    let abort;
    // abort方法用于直接执行reject
    let newPromise = new Promise((resolve,reject)=>{ // 创建了一个promise
        abort = reject;
    });//  创建新的一个promise。专门用于处理
    let p = Promise.race([newPromise,promise]);
    p.abort = abort; // 以调用aboutpromise会直接抛出reject，
    return p;
}
let p1 = wrap(p);
setTimeout(() => {
    // 模拟超时
    // 让这个promise 变成失败态
    p1.abort('error');
}, 2000);
p1.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
});
// xhr.abort  fetch 方法取消不了
// axios基于xhr可以取消1
// generator async + await


// abort
let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('3000 success')
    },3000)
})
function warp1(promise){
    let abort;
    let newPromise = new Promise((resovlve,reject)=>{
        abort = reject
    })
    let p = Promise.race([newPromise,promise])
    p.abort = abort;
    return p
}

let p4 = warp1(p2)
setTimeout(()=>{
    p4.abort('2000 超时')
},2000)
p4.then((data)=>{
    console.log(data)
},err=>{
    console.log(err)
})