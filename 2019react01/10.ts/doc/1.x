"use strict";
/**
 * 1.数据类型
 */
//let zname:string = 'zhufeng';
var age = 10;
var married = true;
var arr = ['a', 'b', 'c'];
var arr2 = [1, 2, 3];
//元组类型tuple 数量和类型都固定的数组
var person = ['zhufeng', 10];
//string
//String
var Gender;
(function (Gender) {
    Gender["BOY"] = "\u7537";
    Gender["GIRL"] = "\u5973";
})(Gender || (Gender = {}));
var zhangsan = { name: '张三' };
//zhangsan.gender = Gender.BOY;
console.log(Gender.BOY); //0
console.log(Gender.GIRL); //1
console.log(0 /* RED */); //0
console.log(1 /* YELLOW */); //1
var BOY = 0;
var GIRL = 1;
//zhangsan.gender = 0;
//表示可以接收任意类型的值 
var zname = 1;
zname = "";
zname = true;
//let rootDiv:HTMLElement|null = document.getElementById('root');
//rootDiv!.style.color = 'red';
var obj = null;
//console.log(obj!.name); obj?obj.name:obj;
var z2name;
z2name = null;
z2name = undefined;
var null2;
null2 = null;
//void 表示没有任何类型 当一个函数没有返回值的时候，那么返回值就是void
function greeting(name) {
    console.log('hello ', name);
    return undefined;
}
//never 永久不
function error(message) {
    console.log('before error');
    throw new Error(message);
    console.log('after error');
}
error('hello');
function loop() {
    while (true) {
    }
}
var result = loop();
//一方面never是null和undefined子类型 
var aaa;
var bbb;
aaa = result;
bbb = result;
var yy;
yy = 10;
yy = '';
yy = true;
var zz = [10, 'zz'];
zz.push('true');
var t = undefined;
function fn(x) {
    if (typeof x === 'number') {
    }
    else if (typeof x === 'string') {
    }
    else {
        var y = x;
    }
}
function exec() {
    console.log('exec');
    //return 1;
}
//什么会写死循环  写一个持续执行的任务 while(true){执行任务 sleep(5m)}
//抛异常 比如单元 测试的时候
//assert(1+1==2,"测试没有通过");
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
})(Color || (Color = {}));
function z1() {
    while (true) { }
    return '1';
}
var a1;
a1 = 'z';
a1 = 10;
var b1 = 10;
