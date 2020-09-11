// // es5 构造函数 模拟类
// // 1 函数的名字大写
// // 2 new Obj // 
// function Animal(){
//     this.type = '哺乳类';
//     this.a = {};
// }

// Animal.prototype.home = {}
// Animal.prototype.fn = function(){
    
// }
// // 类一类事物  具体的一个实例
// // 私有属性 是外面拿不到的  
// // 1.实例上的属性
// // 2.公共属性
// // 3.静态方法 静态属性 只能通过类来调用
// let animal1 = new Animal(); // new 实现原理
// let animal2 = new Animal(); // new 实现原理
// console.log(animal1);

// // 每个对象上都会有一个__proto__ 找所属类的原型 .__proto__ = X.prototype
// console.log(animal1.__proto__==Animal.prototype);
// console.log(Animal.prototype.__proto__ == Object.prototype)
// console.log(Object.prototype.__proto__); // null

// console.log(Object.__proto__ == Function.prototype) // true
// console.log(Function.__proto__ == Function.prototype); // true
// console.log(Object.__proto__ === Function.__proto__); // true

// // constructor
// console.log(Animal.prototype.constructor === Animal);
// console.log(animal1.constructor); // 获取的是类 无法拿到类实例的属性 可以拿到静态属性或者方法


function Animal (){
    // 实例上的属性
    this.type = '布鲁勒'
    this.featrue = {
        tall:1,
    }
}
// 静态属性和方法。实例拿不到，只能通过类获取或调用
Animal.height = '1米8'
Animal.eat = function(){
    console.log('eat')
}
// 公共属性或方法
Animal.prototype.color = 'red' // 公共属性
Animal.prototype.say = function(){ // 公共方法 不要箭头函数
    console.log('ddd')
}
let animal1 = new Animal()
let animal2 = new Animal()

console.log(animal1.featrue === animal2.featrue) // false 实例属性，每个实例对象都是不一样的
console.log(animal1.color === animal2.color) // 公共
console.log(animal1)
console.log(animal1.constructor) // 构造函数 ，类。无法拿到实例到属性。可以获取静态方法
console.log(animal1.constructor.type) // undefined
console.log(animal1.constructor.color) // undefined
console.log(animal1.constructor.height) // 1米8


// 私有属性：外边拿不到的
//   1. 实例上的属性。构造函数内的。实例后，不同的实例其实是无关的了
//   2. 公共属性和方法。prototype上的，实例共享，
// 静态属性和方法：
// Animal.eat()





