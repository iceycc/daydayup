/// node require 加载别的模块的 exports 导出对象
define(function (require, exports) {
    debugger
    let addModule = require('./modules/addModule');//动态加载其它模块，不需要事先确定好 common.js
    let ret1 = addModule.add(2, 2);
    console.log(ret1);
    let minusModule = require('./modules/minusModule');
    let ret2 = minusModule.minus(2, 2);
    console.log(ret2);
});
//