"use strict";
var person = {};
person.name = 'xiaomuzhu';
person.age = 20;
var person1 = 'Tom';
var person2 = 'Tom';
var PersonN = (function () {
    function PersonN() {
        this.name = 'xiaomuzhu';
        this.age = 20;
    }
    return PersonN;
}());
var AnimalN = (function () {
    function AnimalN() {
        this.name = 'petty';
        this.color = 'pink';
    }
    return AnimalN;
}());
function getSometing(arg) {
    if (arg instanceof PersonN) {
        console.log(arg.age);
    }
    if (arg instanceof AnimalN) {
        console.log(arg.color);
    }
}
