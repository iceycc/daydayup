// function* fibs(){
//   let a=0;
//   let b=1;
//   while(true){
//     yield a;
//     // a = b;
//     // b = a+b
//     [a,b] = [b,a+b];
//   }
// }
// let arr = fibs()
// console.log(arr.next())
// console.log(arr.next())
// console.log(arr.next())
// console.log(arr.next())
// console.log(arr.next())
// console.log(arr.next())
// console.log(arr.next())


// let a =0;
// let b =1;
// [a,b] = [b,a+b];
// a = b;
// b = a+b;
// let a = 0;
// let b = 1;
// // let arr = [b]
// [a,b] = [b,a+b]
// console.log(a,b)

// let arr = [1,2,3]
// let {0:first,[arr.length-1]:last} = arr
// console.log(first,last)

// let {toString:s,PrimitiveValue:value} = 123
// console.log(s,value)
// console.log(Object.prototype.toString.call(123))

// let arr = [3,2,1]
// arr.name = 'arr2'
// console.log('for of---------')
// for(let i of arr){
//   console.log(i)
// }

// console.log('for in----------')
// for(let i in arr){
//   console.log(i)
// }

// let obj = {
//   name:'wby',
//   age:'123'
// }
// obj.sayHi = 11231
// // console.log('for of---------')
// // for(let i of obj){
// //   console.log(i)
// // }

// console.log('for in----------')
// for(let i in obj){
//   console.log(i)
// }


const map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for (let i of map) {
  // console.log(key + " is " + value);
  console.log(i)
}