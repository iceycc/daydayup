// 基于类：

// 基于原型

// 原型系统的复制操作有两种思路
// 1 并不是真的复制一个原型对象，而是新对象持有原型的引用
// 2 直接复制对象，两个对象无关联

// js选择的是前者，持有原型的引用

// JavaScript的原型：
// 1 对象都有prototype，就是对象的原型
// 2 读一个属性，如果对象本身没有，就会继续访问对象的原型，知道原型为空或者找到为止。

// es6后，提供了一些直接访问操纵原型的方法
// Object.create 根据指定的原型创建对象，对象可以是null
// Object.getPrototypeOf 获取一个对象的原型
// Object.setPrototypeOf 设置一个对象的原型


// 早期 类的定义是一个私有属性 class。
var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function(){ return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v))); 

// es5后 class私有属性被Symbol.toStringTag代替
var o = { [Symbol.toStringTag]: "MyObject" }
// var o = {}
console.log(o + "");
console.log(Object.prototype.toString.call(o));

// new操作做了哪些事情
// 1 以构造函器的protoType属性（注意与私有字段[[prototype]]的区别为原型，创造新对象；
// 2 将this和调用传参传给构造器，执行；
// 3 如果构造器返回的是对象，则返回，否则返回的是第一步创建的对象
function _new(fn,...arg){
   let obj = Object.create(fn.prototype) // 创建一个以构造函数
   let cons = fn.apply(obj,arg)
   return cons instanceof Object ? cons : obj
}

function Animal(name){
  this.name = name
}

let o = _new(Animal,'tiger')
console.log(o.name)



// 构造器模拟类：
// 提供了两种方法：
//   1. 构造器中添加属性
function c1(){
  this.p1 = 1;
  this.p2 = function(){
      console.log(this.p1);
  }
} 
var o1 = new c1;
o1.p2();
//   2. 构造器的protoType属性上添加属性
function c2(){}
c2.prototype.p1 = 1;
c2.prototype.p2 = function(){
  console.log(this.p1);
}

var o2 = new c2;
o2.p2();


// 早期版本没有create Object.setPrototypeOf等，new是唯一可以指定[[prototype]]的方法。
// Object.create的polyfill：不支持create的第二个参数
Object.create = function(prototype){
  var cls = function(){}
  cls.prototype = prototype
  return new cls
}

// es6类的基本写法
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

// es6类继承

class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.



// js对象

// js对象的几种类型：
// 宿主对象：浏览器中 window Image  / node中global
// 内置对象
//    固有对象：标准规定的
//    原生对象：原生对象无法用纯JavaScript实现，也不能继承。 主要分为：基本类型，基础功能和数据结构（Array，Date，RegExp等）、错误类型（Error）、二进制操作、带类型等数组。
//    普通对象

// 函数对象的定义：  具有 [[call]]私有字段的对象，
// 构造器对象的定义是：具有私有字段[[construct]]]的对象。
console.log(Object.prototype.toString.call(new Date)); // 作为构造器返回的是新对象
console.log(Object.prototype.toString.call(Date())) // 作为函数产生字符串
 // 内置对象和宿主对象两者表现是不一致的。有的不支持函数操作，
 console.log(new Image); 
 console.log(Image());//抛出错误
 // 基本类型 （String、Number、Boolean)，构造器作为函数调用时，产生类型转换的效果
 




function cls(){
  this.a = 100;
  return {
      getValue:() => this.a
  }
}
// var o = new cls;
var o = new cls();
console.log(o.getValue()); //100
//a在外面永远无法访问到

