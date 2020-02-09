"use strict";
function greeter(person) {
    return "hello" + person;
}
var user = 'Tom';
console.log(greeter(user));
var isLoading = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
var book = 'ts-start';
function warn() {
    console.log('warn');
}
warn();
var void_b = undefined;
var undefined_a = undefined;
var null_b = null;
var sym1 = Symbol('key1');
var sym2 = Symbol('key2');
Symbol('key1') === Symbol('key1');
var o_max = Number.MAX_SAFE_INTEGER;
var o_max1 = o_max + 1;
var o_max2 = o_max + 2;
console.log('双精度出现的问题', o_max1 === o_max2);
var max = BigInt(Number.MAX_SAFE_INTEGER);
var max1 = max + BigInt(1);
var max2 = max + BigInt(2);
console.log('bigint解决双精度问题', max1 === max2);
var notSure = 4;
notSure = "maybe a string instead";
var any_value;
any_value = true;
any_value = 1;
any_value = "Hello World";
any_value = Symbol("type");
any_value = {};
any_value = [];
var unknown_value;
unknown_value = true;
unknown_value = 1;
unknown_value = "Hello World";
unknown_value = Symbol("type");
unknown_value = {};
unknown_value = [];
function getValue(value) {
    if (value instanceof Date) {
        return value.toISOString();
    }
    return String(value);
}
function error(message) {
    throw new Error(message);
}
var empty = [];
var numList = [1, 1, 2, 3];
var strList = ['2', '2'];
var x_Tuple;
x_Tuple = ['Tom', 15];
var y_Tuple;
y_Tuple = ['Tom', 20];
var tuple = ['Jam', 20];
tuple.push(23);
console.log('元组越界', tuple);
var obj_value;
var Direction;
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
obj_value = Direction;
obj_value = [1];
obj_value = [2, 'Tom'];
obj_value = {};
