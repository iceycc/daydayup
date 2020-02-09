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
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return Animal;
}());
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('miao miao');
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.makeSound();
cat.move();
var Car = (function () {
    function Car() {
    }
    Car.prototype.run = function (name) {
        if (name === void 0) { name = ''; }
        console.log(name + ' 启动...');
        this.say(name);
        this.move(name);
    };
    Car.prototype.move = function (type) {
        console.log(type + ' 移动...');
    };
    Car.prototype.say = function (name) {
        console.log('I am a ' + name + ' car');
    };
    return Car;
}());
var GTR = (function (_super) {
    __extends(GTR, _super);
    function GTR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GTR.prototype.init = function (name) {
        if (name === void 0) { name = ''; }
        this.run(name + ' init');
        this.say(name);
    };
    return GTR;
}(Car));
var car = new Car();
var gtr = new GTR();
car.run('Car');
gtr.init('gtr');
var Props = (function () {
    function Props() {
        this.children = [];
        this.height = 160;
        this.animation = 'easeInOutQuad';
        this.isAuto = true;
        this.autoPlayInterval = 4500;
        this.selesctedColor = 'red';
        this.showDots = true;
    }
    return Props;
}());
var defaultProps = new Props();
defaultProps.speed = 50;
defaultProps.beforeChange = function () {
    console.log('1');
};
console.log(defaultProps.height);
