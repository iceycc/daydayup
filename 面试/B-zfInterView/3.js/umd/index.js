//写的模块可以在 AMD CMD COMMONS环境(node)下运行
((global, factory) => {
    //如果当前的上下文中有define 函数，并且amd 说明处于AMD环境下
    if (typeof define === 'function' && define.amd) {
        define(['lodash'], factory);
    } else if (typeof exports === 'object') {// common.js
        let _ = require('lodash');
        module.exports = factory(_);
    } else {
        global.testModule = factory(global.jQuery);//直接挂载 成window的全局变量
    }
})(this, (_) => {
    //这是本模块的定义
    //$.ajax;
    //$('#root').html('hello');
    return {};
});