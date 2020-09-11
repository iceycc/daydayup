"use strict";
class Person {
    constructor(weight, name, born) {
        this.weight = weight;
        this.name = name;
        this.born = born;
    }
}
let x;
let y = {
    weight: 1,
    name: 'Tom',
    born: '2011-11-11'
};
let z = {
    name: 'Tom'
};
x = y;
x = new Person(120, 'cxk', '1996-12-12');
let fnx = (a) => 0;
let fny = (c, b) => 0;
fny = fnx;
let items = [1, 2, 3];
items.forEach((item, index, array) => console.log(item));
items.forEach((item) => console.log(item));
let foo = (x, y) => { };
let bar = (x, y) => { };
let bas = (...args) => { };
foo = bar = bas;
bas = bar = foo;
let fnX = () => ({ name: 'Alice' });
let fnY = () => ({ name: 'Alice', location: 'Seattle' });
fnX = fnY;
var Status1;
(function (Status1) {
    Status1[Status1["Ready"] = 0] = "Ready";
    Status1[Status1["Waiting"] = 1] = "Waiting";
    Status1["End"] = "end";
})(Status1 || (Status1 = {}));
let status1 = Status1.Ready;
let status2 = Status1.End;
let status3 = Status1.End;
let m1 = 0;
let m2 = 'end';
status1 = m1;
m1 = status1;
status3 = m2;
m2 = status3;
console.log(m2);
class Animal8 {
    constructor(name, numFeet) {
    }
    static getAge() {
        console.log(Animal8.age);
    }
}
Animal8.age = '19';
class Size8 {
    constructor(meters) {
    }
    static getAge() {
        console.log(Size8.age);
    }
}
Size8.age = 18;
let a8;
let s8;
a8 = s8;
s8 = a8;
class Animal9 {
}
class Cat9 extends Animal9 {
}
class Size9 {
}
let a9;
let c9;
let s9;
a9 = c9;
let x8;
let y8;
function getPersonName(p) {
}
let p9 = {
    name: 'Tom1',
    age: 10,
    weight: 200,
};
let An9 = {
    name: 'Tom2',
    age: 10,
    weight: 200
};
getPersonName(p9);
getPersonName(An9);
