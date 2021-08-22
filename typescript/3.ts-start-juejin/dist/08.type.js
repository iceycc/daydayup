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
var Person = (function () {
    function Person(weight, name, born) {
        this.weight = weight;
        this.name = name;
        this.born = born;
    }
    return Person;
}());
var x;
var y = {
    weight: 1,
    name: 'Tom',
    born: '2011-11-11'
};
var z = {
    name: 'Tom'
};
x = y;
x = new Person(120, 'cxk', '1996-12-12');
var fnx = function (a) { return 0; };
var fny = function (c, b) { return 0; };
fny = fnx;
var items = [1, 2, 3];
items.forEach(function (item, index, array) { return console.log(item); });
items.forEach(function (item) { return console.log(item); });
var foo = function (x, y) { };
var bar = function (x, y) { };
var bas = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
foo = bar = bas;
bas = bar = foo;
var fnX = function () { return ({ name: 'Alice' }); };
var fnY = function () { return ({ name: 'Alice', location: 'Seattle' }); };
fnX = fnY;
var Status1;
(function (Status1) {
    Status1[Status1["Ready"] = 0] = "Ready";
    Status1[Status1["Waiting"] = 1] = "Waiting";
    Status1["End"] = "end";
})(Status1 || (Status1 = {}));
var status1 = Status1.Ready;
var status2 = Status1.End;
var status3 = Status1.End;
var m1 = 0;
var m2 = 'end';
status1 = m1;
m1 = status1;
status3 = m2;
m2 = status3;
console.log(m2);
var Animal8 = (function () {
    function Animal8(name, numFeet) {
    }
    Animal8.getAge = function () {
        console.log(Animal8.age);
    };
    Animal8.age = '19';
    return Animal8;
}());
var Size8 = (function () {
    function Size8(meters) {
    }
    Size8.getAge = function () {
        console.log(Size8.age);
    };
    Size8.age = 18;
    return Size8;
}());
var a8;
var s8;
a8 = s8;
s8 = a8;
var Animal9 = (function () {
    function Animal9() {
    }
    return Animal9;
}());
var Cat9 = (function (_super) {
    __extends(Cat9, _super);
    function Cat9() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat9;
}(Animal9));
var Size9 = (function () {
    function Size9() {
    }
    return Size9;
}());
var a9;
var c9;
var s9;
a9 = c9;
var x8;
var y8;
function getPersonName(p) {
}
var p9 = {
    name: 'Tom1',
    age: 10,
    weight: 200,
};
var An9 = {
    name: 'Tom2',
    age: 10,
    weight: 200
};
getPersonName(p9);
getPersonName(An9);
