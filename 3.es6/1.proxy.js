/**
 * 1。 proxy
 * 2。 Reflect：13种发射。keys get set has。。。
 *      将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。
 *      修改某些Object方法的返回结果，让其变得更合理。
 * 3. proxy代理数组是 push会触发两次set 为什么？ 值的改变 和 length的改变  
 */
// Object.defineProperty get / set
// 不能监听数组的变化 push shift

// proxy 兼容性

// 支出数组和对象
// let obj = {
//   // 如果对象上不存在某个属性
//   name: "zf",
//   age: {
//     n: 1
//   }
// };
// let arr = [];
// let handler = {
//   // defineProperty :{}
//   get(target, key) {
//       if(typeof target[key] === 'object'){  // 是对象的重新代理
//           return new Proxy(target[key],handler) // 取值时再递归
//       }
//     // Reflect keys
//     // return Reflect.get(target, key);
//     return target[key]
//   },
//   set(target, key, value) {
//     if (key === "length") return true; // 长度等于length时
//      target[key] = value;
//     //  return true
//      console.log('update');
//     return Reflect.set(target, key, value);
//   }
// };
// let proxy = new Proxy(obj, handler);
// // vue 时候 必须保证先声明在使用 vm.$set()
// // proxy.push('123');
// proxy.age = {}
// console.log(obj);


let obj = {
  name:'wby',
  age:'28',
  feature:{
    tall:'170',
    weight:'75kg'
  }
}
let handle = {
  get(target,key){
    console.log('get')
    if(typeof target[key] == 'object'){
      // 如果是对象
      // 递归 深度监控 ==》 调用时才会触发
      return new Proxy(target[key],handle)
    }
    return Reflect.get(target,key) // 反射 等价于 // return target[key]
    
  },
  set(target,key,value){
    // 改变数组时，push等方法会同时改变值和length。触发两次set方法
    if(key === 'length') return true // 直接拦截 或者单独逻辑处理
    console.log('set')
    // target[key] = value ; 
    // return true;
    return Reflect.set(target,key,value) //  等价于 target[key] = value ; return true
  }
}
let pro = new Proxy(obj,handle)
pro.age = '30'
console.log(pro.age)


