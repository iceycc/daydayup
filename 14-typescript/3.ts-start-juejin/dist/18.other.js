"use strict";
var other;
(function (other) {
    class StrictClass {
        constructor() {
            this.bar = 'hello';
            this.foo = 42;
        }
    }
    let x;
    initialize();
    console.log(x + x);
    function initialize() {
        x = 10;
    }
    function isString(test) {
        return typeof test === 'string';
    }
    function example(foo) {
        if (isString(foo)) {
            console.log('it is a string' + foo);
            console.log(foo.length);
        }
    }
    example('hello world');
    function greeter(person) {
        return "Hello, " + person;
    }
    let arr1 = [1, 'one', 1n];
    const bar = [1, 1];
    let [a, b] = bar;
    const action1 = {
        type: 'update',
        payload: {
            id: 10
        }
    };
    const action = {
        type: 'update',
        payload: {
            id: 10
        }
    };
})(other || (other = {}));
