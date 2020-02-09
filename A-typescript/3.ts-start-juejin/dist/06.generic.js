"use strict";
function returnItem(parent) {
    return parent;
}
var value1 = returnItem(2);
var value2 = returnItem('2');
var value3 = returnItem(false);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([20, 'Tom']);
function getArrayLength(arr) {
    console.log(arr.length);
    return arr;
}
console.log(getArrayLength([1, 2, 3, 4]));
var Stack = (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var stack1 = new Stack();
function getValue(obj, key) {
    return obj[key];
}
var obj = {
    name: 'Tom',
    age: '10'
};
getValue(obj, 'age');
var Demo1 = (function () {
    function Demo1() {
    }
    Demo1.prototype.useT = function () {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    };
    return Demo1;
}());
var Demo = (function () {
    function Demo() {
    }
    Demo.prototype.useT = function () {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    };
    return Demo;
}());
function factory(type) {
    return new type();
}
factory(Demo);
