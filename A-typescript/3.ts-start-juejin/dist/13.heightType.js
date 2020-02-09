"use strict";
function mixin(first, second) {
    const result = {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
const x9 = mixin({ a: 'hello' }, { b: 42, a: '2' });
console.log;
const a = x9.a;
const b = x9.b;
function formatCommandline(command) {
    let line = '';
    if (typeof command === 'string') {
        line = command.trim();
    }
    else {
        line = command.join(' ').trim();
    }
}
let a91;
let a92;
const obj9 = {};
const obj10 = {};
for (let i in obj10) {
    console.log(i);
}
const b9 = true;
const c92 = 'hello';
let tree9 = {
    value: '33',
    left: {},
    right: {}
};
aliased1({ num: 2 });
interfaced({ num: 1 });
