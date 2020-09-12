"use strict";
const add = (a, b = 10, ...ext) => {
    console.log(ext);
    return a + b;
};
console.log(add(1, 2, 3, 4, 5, 6));
function assigned(a, b, c, d) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
assigned(1);
assigned(1, 2);
assigned(1, 2, 3, 4);
