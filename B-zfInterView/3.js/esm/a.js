"use strict";
/* var a = 0;
var b = 1;
export const c = 3;
//export {} 并非对象的意思，和对象没有关系。这个{}表示批量导出
export {
    a as aa,
    b
}
var d = 4;
export default d; */
exports.__esModule = true;
var a = 1;
setTimeout(function () {
    a = 2;
}, 1000);
exports["default"] = a;
