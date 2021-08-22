"use strict";
var h23;
(function (h23) {
    function f(flag) {
        if (flag) {
            return 'xxxx';
        }
        else {
            return 111;
        }
    }
    let rd = Math.random();
    const x = f(rd < 0.5);
    console.log(x);
})(h23 || (h23 = {}));
