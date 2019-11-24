// defineProperty 定义属性

// getter setter 属性访问器

// koa源码
// let obj = {
//     _body:'',
//     get url(){
//         // todo...
//         console.log('get')
//         return this._body
//     },
//     set url(value){
//         // todo...
//         console.log('set')
//         this._body = value;
//     }
// }
// obj.url = 200;
// console.log(obj.url);

// let obj = {};
// let other = '';
// Object.defineProperty(obj,'name',{
//     enumerable:true, // 是否可枚举
//     configurable:true, // 是否可以修改
//     // writable:true, //  是否可写 和 value连用
//     // value:100,
//     get(){
//         return other
//     },
//     set(val){
//         other = val;
//     }
// });
// obj.name = '100';
// console.log(obj);
// // 拦截的作用

let other = ''
let obj =  {};
Object.defineProperty(obj,'name',{
  enumerable:true, // 是否可枚举，默认false
  configurable:true,
  // writable:true, // 是否可以写，和 value 连用
  // value:100,
  get(){
    console.log('get')
    return other
  },
  set(val){
    console.log('set',val)
    other = val
  }
})

obj.name = 2000
console.log(obj)
console.log(obj.name)
