"use strict";
const person = {};
person.name = 'xiaomuzhu';
person.age = 20;
const person1 = 'Tom';
const person2 = 'Tom';
class PersonN {
    constructor() {
        this.name = 'xiaomuzhu';
        this.age = 20;
    }
}
class AnimalN {
    constructor() {
        this.name = 'petty';
        this.color = 'pink';
    }
}
function getSometing(arg) {
    if (arg instanceof PersonN) {
        console.log(arg.age);
    }
    if (arg instanceof AnimalN) {
        console.log(arg.color);
    }
}
