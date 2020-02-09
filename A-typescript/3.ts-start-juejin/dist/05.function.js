"use strict";
var add = function (a, b) {
    if (b === void 0) { b = 10; }
    var ext = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        ext[_i - 2] = arguments[_i];
    }
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
