"use strict";
function returnItem(parent) {
    return parent;
}
let value1 = returnItem(2);
let value2 = returnItem('2');
let value3 = returnItem(false);
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
swap([20, 'Tom']);
function getArrayLength(arr) {
    console.log(arr.length);
    return arr;
}
console.log(getArrayLength([1, 2, 3, 4]));
class Stack {
    constructor() {
        this.arr = [];
    }
    push(item) {
        this.arr.push(item);
    }
    pop() {
        this.arr.pop();
    }
}
const stack1 = new Stack();
function getValue(obj, key) {
    return obj[key];
}
let obj = {
    name: 'Tom',
    age: '10'
};
getValue(obj, 'age');
class Demo1 {
    useT() {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    }
}
class Demo {
    useT() {
        this.genericProperty.doSomething();
        this.genericProperty.doSomethingElse();
    }
}
function factory(type) {
    return new type();
}
factory(Demo);
