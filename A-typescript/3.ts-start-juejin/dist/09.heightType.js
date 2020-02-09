"use strict";
function mixin(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var x9 = mixin({ a: 'hello' }, { b: 42, a: '2' });
console.log;
var a = x9.a;
var b = x9.b;
function formatCommandline(command) {
    var line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
}
var a91;
var a92;
var obj9 = {};
var obj10 = {};
for (var i in obj10) {
    console.log(i);
}
var b9 = true;
var c92 = 'hello';
var tree9 = {
    value: '33',
    left: {},
    right: {}
};
aliased1({ num: 2 });
interfaced({ num: 1 });
