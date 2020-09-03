//sea.js common.js webpack 是一样的
let factories = {};
let modules = {};
//esm 静态的
function require(name) {
    let script = document.createElement('script');
    script.src = name;//http://127.0.0.1:8081/modules/minusModule.js
    document.head.appendChild(script);
    script.onload = function () {
        document.head.removeChild(script);
        if (modules[name]) {
            return modules[name];
        }
        let factory = factories[name];
        let exports = {};
        factory(require, exports);
        modules[name] = exports;
        return exports;
    }

}
function define(name, factory) {
    factories[name] = factory;
}
function use(name) {
    require(name);
}
define('addModule', function (require, exports) {
    exports.add = function (a, b) {
        return a + b;
    }
});
define('minusModule', function (require, exports) {
    exports.minus = function (a, b) {
        return a - b;
    }
});
define('index', function (require, exports) {
    let addModule = require('addModule');//动态加载其它模块，不需要事先确定好 common.js
    let ret1 = addModule.add(2, 2);
    console.log(ret1);
    let minusModule = require('minusModule');
    let ret2 = minusModule.minus(2, 2);
    console.log(ret2);
});
use('index');