"use strict";
function greeter(person) {
    return "hello" + person;
}
const user = 'Tom';
console.log(greeter(user));
const isLoading = false;
const decLiteral = 6;
const hexLiteral = 0xf00d;
const binaryLiteral = 0b1010;
const octalLiteral = 0o744;
const book = 'ts-start';
function warn() {
    console.log('warn');
}
warn();
const void_b = undefined;
let undefined_a = undefined;
let null_b = null;
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');
Symbol('key1') === Symbol('key1');
const o_max = Number.MAX_SAFE_INTEGER;
const o_max1 = o_max + 1;
const o_max2 = o_max + 2;
console.log('双精度出现的问题', o_max1 === o_max2);
const max = BigInt(Number.MAX_SAFE_INTEGER);
const max1 = max + BigInt(1);
const max2 = max + BigInt(2);
console.log('bigint解决双精度问题', max1 === max2);
let notSure = 4;
notSure = "maybe a string instead";
let any_value;
any_value = true;
any_value = 1;
any_value = "Hello World";
any_value = Symbol("type");
any_value = {};
any_value = [];
let unknown_value;
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
const empty = [];
const numList = [1, 1, 2, 3];
const strList = ['2', '2'];
let x_Tuple;
x_Tuple = ['Tom', 15];
let y_Tuple;
y_Tuple = ['Tom', 20];
const tuple = ['Jam', 20];
tuple.push(23);
console.log('元组越界', tuple);
let obj_value;
var Direction;
(function (Direction) {
    Direction[Direction["Center"] = 1] = "Center";
})(Direction || (Direction = {}));
obj_value = Direction;
obj_value = [1];
obj_value = [2, 'Tom'];
obj_value = {};
