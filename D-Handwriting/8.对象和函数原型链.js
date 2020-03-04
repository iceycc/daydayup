
/** 原型实现继承 属性和方法的共享
 * 1. Function.__proto__ === Function.prototype
 * 2. 对象的祖宗是null
 * 3. 对象是通过函数创建的
 * 
 * 为什么会有函数
 * 1. 函数的核心作用是用来批量创建的对象
 * 
 * 基础数据类型不是对象
 *  包装对象
 */

console.log('====================object=============================')
let obj = new Object()
console.log(obj.__proto__ === Object.prototype) // true
console.log(obj.__proto__.constructor === Object) // true
console.log(Object.__proto__ === Function.prototype) // true
console.log(Object.__proto__.constructor === Function) // 
console.log(Object.prototype.__proto__ === null) // true

const add = new Function('a','b','return a + b')
function mi(a,b){
    return a-b
}
console.log(add(3,2),mi(3,2))
console.log(add.__proto__ === Function.prototype) // true
console.log(Function.__proto__ === Function.prototype) // true
console.log(Function.prototype.__proto__ === Object.prototype) // true

function Person(name){
    this.name = name
}

let p =new Person('www')
console.log('===================function==============================')
console.log(p.name)
console.log(p.__proto__ === Person.prototype) // true
console.log(Person.__proto__ === Function.prototype) // true
console.log(Person.prototype.__proto__ === Object.prototype) // true



console.log('===================instanceof==============================')
// 原型链交互就行
console.log(p instanceof Person) // true
console.log(p instanceof Object) // true
console.log(p instanceof Function) // false

// 基本数据类型包装对象
// 1.toString() // error
console.log('===================包装对象==============================')
// 原型链交互就行
let a = 1
console.log(a.toString())