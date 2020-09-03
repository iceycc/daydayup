/**
 * 为了批量创建对象我们有了函数
 * 函数可以批量创建对象
 */
//字面量创建对象，它是一个语法糖，内部调用是new Object()
//let obj1 = { name: 'zhufeng' };
//Object是个什么东西？其实也是一个函数，可以用来创建普通对象

let obj = new Object();
//Object哪来的?
//Object也是一个函数，函数也是对象，肯定也是new出来的
//Object是函数类的一个实例


/* function add(a, b) {
    return a + b;
}
console.log(add.length);//形参的个数
//add也是Function类的实例
//Object也是Function类的实例
let minus = new Function('a', 'b', 'return a-b');
console.log(add(1, 2), minus(2, 1));

let Object = new Function();
Object.__proto__ = Function.prototype; */

function Person(name) {
    this.name = name;
}
let Person = new Function();

let Function = new Function();