/**
 * define定义模块
 * require使用模块
 */
require.config({
    baseUrl: './modules'
});

//import addModule 
require(['addModule', 'minusModule'], function (addModule, minusModule) {
    console.log(addModule.add(2, 2), minusModule.minus(2, 2));
});