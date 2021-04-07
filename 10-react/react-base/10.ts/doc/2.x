"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* class Father{
    static className = 'Father';
    static getClassName(){
        console.log(Father.className)
    }
}
Father.className;
Father.getClassName(); */
//抽象类本身是用来描述或者说提取一定的行为
/* abstract class Animal{
   name:string='zhufeng';
   abstract getName():void;
   speak(name:string){
       console.log('hello',name)
   }
}
//let a = new Animal();
class Cat extends Animal{
    getName(){
        console.log(this.name)
    }
}
class Dog extends Animal{
    getName(){
        console.log(this.name)
    }
}
//接口
interface Animals{
    name:string;
} */
/**
abstract class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract speak():void;
    abstract speak2():void;
    getName(){
        return 'AnimalName'
    }
    fly():void{
        console.log('我要飞');
    }
    swim():string{
        console.log('我要游泳');
        return 'hello';
    }
}
interface Flying{
    num:number
    fly():void
}
interface Swiming{
    swim():string
}
//因为我们的JS是单继承的
class Duck extends Animal implements Flying,Swiming{
    speak(){
        console.log('嘎嘎嘎')
    }

    getName(){
        return super.getName()+'DuckName'
    }
}
let duck = new Duck('这是名字');
duck.fly();
duck.speak();
console.log(duck.getName());
/**
 */
/* class Father{
   getName(){

   }
}
function Father2() {
}
Father2.prototype.getName = function () {
};

class Child extends Father{

}
function Child2() {
}
Child2.prototype = Object.create(Father2.prototype);
let c = new Child();
c.getName();
*/
//重写和重载 
//重定是指的子类重写父类的实现
var Animal = /** @class */ (function () {
    function Animal() {
        this.money = 100;
    }
    Animal.prototype.speak = function (word) {
        return '动物叫:' + word;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.speak = function (word) {
        return '狗叫:' + word;
    };
    Dog.prototype.getMoney = function () {
        console.log(this.money);
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.speak('hello');
function double(x) {
    if (typeof x === 'number') {
        return x * 2;
    }
    else {
        return x + x;
    }
}
double(2);
double('a');
var p = {
    id: 1,
    name: 'zhufeng',
    age: 10,
    city: 'beijing'
};
var Man = /** @class */ (function () {
    function Man() {
    }
    Man.prototype.speakChinese = function () { };
    Man.prototype.speak = function () { };
    Man.prototype.eat = function () { };
    return Man;
}());
var cost = function (price, discount) {
    return price * discount;
};
var u = { name: 'zhufeng' };
var arr = ['1', '2', '3'];
var obj = {
    0: '1',
    1: '2',
    2: '3'
};
var Dog2 = /** @class */ (function () {
    function Dog2() {
    }
    Dog2.prototype.speak = function () { };
    return Dog2;
}());
//约束类的构造函数
var Animal3 = /** @class */ (function () {
    function Animal3(name) {
        this.name = name;
    }
    return Animal3;
}());
function create(clazz, name) {
    return new clazz(name);
}
var a = create(Animal3, 'zhufeng');
console.log(a);
