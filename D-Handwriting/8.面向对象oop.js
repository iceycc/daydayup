// Object有一个crate的私有属性
// Object还有个prototype指向
// Object也是也是一个函数，也是由Function创建的。

// obj是由Object创建的
let obj = new Object()
console.log(obj.__proto__ === Object.prototype) // true
console.log(Object.__proto__ === Function.prototype) // true

function Person() {}
let p = new Person()
// Function也是由Function创建的
// Function的原型对象
console.log(p.__proto__ === Person.prototype) // true
console.log(Person.__proto__ === Function.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true
console.dir(Function.prototype.__proto__ === Object.prototype) // true
function add(a, b) {
  return a + b
}

// 
let minus = new Function('a','b','return a - b')
console.log(add(3,2),minus(3,2))