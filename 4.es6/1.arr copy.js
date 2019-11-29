//  求和
let total = [{
  price: 10,
  count: 1
}, {
  price: 20,
  count: 2
}, {
  price: 30,
  count: 1
}, {
  price: 40,
  count: 1
}].reduce((prev, current, index, arr) => {
  return prev + current.price * current.count
}, 0)
console.log('total',total)
// 且平均值
let avg = [1,2,3,4,5,5,6].reduce((prev,current,index,arr)=>{
  if(index === arr.length - 1){
    return (prev+current)/arr.length
  }
  return prev + current
},0)
console.log('avg',avg)

// compose 组合 
function sum(...arg){
  return arg.reduce((prev,current)=>{
    return prev + current
  })
}
function len(str){
  return str.length
}
function addTag(str){
  return '$' + str
}
// 直接调用
// let r =  addTag(len(sum('a','b','c','d','e')))

// reduce优化
// function componse(...fns){
//   return function(...args){
//     let lastFn = fns.pop()
//     return fns.reduce((prev,current)=>{
//         return current(prev)
//     },lastFn(...args))
//   }
// }
// 优化
let componse = (...fns) => (...args) =>{
  let lastFn = fns.pop()
  return fns.reduce((prev,current)=>current(prev),lastFn(...args))
}

let r =  componse(addTag,len,sum)('a','b','c','d','e')

console.log('r',r)

// reduce 方法 必须函数不能为空
let newr = [1].reduce((a,b)=>{
    console.log(a,b);
})
console.log(newr);

let newArr = [1,2,3].map(item=>{
  return item * 2
})
console.log(newArr)

let filter = [1,2,3,4].filter((item)=>{
  return item >= 3
})
console.log(filter)

let some = [1,2,3,4,5555,2223].some(item=>{
  return /2/.test(item)
})
console.log(some)

let every = [1,3,4,5,77,56].every(item=>{
  return item >= 1
})
console.log(every)

let find = [1,2,3].find(item=>{
  return item >1
})
console.log(find)

console.log([1,2,3].includes(3))
