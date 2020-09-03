/**
 * 在JS里任务队列 
 * 分成两个队列 微任务队列  宏任务队列
 * 吃饭
 * 打扫卫生
 * 打电话  
 * 
 */
async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2')
}
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
})
async1()
new Promise(function (resolve) {
    console.log('promise1')
    resolve()
}).then(function () {
    console.log('promise2')
})
console.log('script end')


let p1 = new Promise(function (resolve) {
    resolve(1);
}).then(result => console.log(result));
setTimeout(() => {
    console.log(2);
});