/**
 * C语言是一个面向过程的语言
 * 面向对象 基本上现所有现代语言都是面向对象
 * JAVA 整个系统划分若干个对象，每个都有自己的数据和方法，然后通过相互调用进行协作完成任务
 */
/**
 * 1.JS数据类型分为二种
 *  基本类型 string boolean null undefined symbol number
 *  引用类型 都是对象 数组 {name:'zhufeng'} /^$/ Date Math Function 是一种比较特殊的对象
 */
console.log(typeof 'a');//string
console.log(typeof true);//boolean
console.log(typeof null);//object JS设计的一个意外的BUG
console.log(typeof undefined);//undefined
console.log(typeof Symbol('a'));//symbol
console.log(typeof 1);//number

console.log(typeof { name: 'zhufeng' });//object
console.log(typeof [1, 2, 3]);//object
console.log(typeof /^$/);//object
console.log(typeof new Date());//object
console.log(typeof function () { });//function 是一种非常特殊的对象

/**
 * 什么是对象?对象和基本数据类型的本质区别是什么?
 * 基本是光棍，或者说只是一个值
 * 而对象类型是若干个属性的集合
 * 一切引用类型都是对象
 * 函数和数组也是对象
 *
 * function为什么这么特殊？和其它对象的本质区别是什么？
 * function本质上来说是可以生产别的对象的，它是一个对象的工作，所有的对象包括 函数本身都是函数生产出来的
 * 1.为什么函数出现？他能解决什么问题
 */
//手工的一个个对象
//var zhangsan = { name: 'zhangsan', age: 10, eat() { console.log('吃饭') } };
//var lisi = { name: 'lisi', age: 20, eat() { console.log('吃饭') } };
//为了加快生产对象的速度,就有了函数，函数可以用来批量的生产对象
function Person(name, age) {
    //会创建一个空对象
    this.name = name;
    this.age = age;
    /*     this.eat = function () {
            console.log('吃饭')
        } */
}
//把批量创建出来的对象(构造函数实例)共用的属性放在构造函数的原型上
/*Person.prototype.eat = function () { console.log('吃饭') } */
Person.prototype = {
    eat() {
        console.log('吃饭')
    }
}
function _new(clazz, ...args) {
    let obj = {};
    //不说类的的概念，因为JS里没有类。但是有构造函数
    //实例才有__proto__,没有prototype.构造函数有 prototype
    //obj.prototype = clazz.prototype;
    obj.__proto__ = clazz.prototype;//关联构造函数的原型 
    clazz.call(obj, ...args);//给实例的私有属性赋值
    return obj;
}
let zhangsan = _new(Person, 'zhangsan', 10);
//__proto__隐式原型
//zhangsan.__proto__.eat();
//.也是一个运算符，先把 zhangsan这个实例的属性上找，如果找到直接返回使用
//如果没找到的就查找zhangsan.__proto__属性，看它身上有没有，如果有直接 返回使用
zhangsan.eat();

/* let zhangsan = new Person('zhangsan', 10);
let lisi = new Person('lisi', 20); */
//我们可以对象的属性分成二种。以Person.有些属性是每个特有的，都不一样。另外一种是所有的Person都一样的
//为了保证灵活，为了节约内存和性能。

function Person() {

}
let p1 = new Person();
console.log(p1 instanceof Person);
console.log(p1 instanceof Object);
console.log(p1 instanceof Function);//false

let a = 1;//基本类型只是一个值，没有属性和方法

/* console.log(a.toString());
console.log(Number.prototype.__proto__.toString());
console.log(new Number(a).toString()); */
