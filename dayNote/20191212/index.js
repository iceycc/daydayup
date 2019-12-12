/**
 * ['1', '2', '3'].map(parseInt)
 */

// ['1', '2', '3'].map(parseInt)
console.log(parseInt('1',0))
console.log(parseInt('2',1))
console.log(parseInt('3',2))
console.log(['1','2','3'].map((item,index)=>{
  console.log(item,index)
}))


// let unary = fn => (...args) => fn(...args)
let unary = fn => val => fn(val)
// let unary = fn =>{
//   return  val => {
//     return fn(val)
//   }
// }
let parse = unary(parseInt)
console.log(['1.1', '2', '3'].map(parse))

/**
 * 防抖和节流
 */
// 防抖 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

function fn(){
  console.log(11)
}
function debounce(fn){
  let timeout = null; // 创建一个标记用来存放定时器的返回值
}
debounce(fn)
 