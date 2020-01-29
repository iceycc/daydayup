/**1 var 的问题：1.全局变量污染 2. 变量提升 3.同一作用域🉑️重复声明 4.函数作用域
 * 2. let const
 * > 1 块级作用域
 * > 2 同一作用域，不能重复声明
 * > 3 常量const ：深度改变，只有不改变空间就没事
 */


// let const
// 尽可能使用const 如果这个值需要更改才用let

// var的问题
// 1.var 声明的变量 声明到全局 污染全局变量 （函数作用域 全局）
// 2.变量提升 可以在声明之前调用  function  var import
// 3.let const  可以 {} 方式来连用 块作用域
// 4.var 能重复声明 在同一个作用域下
// let a = 1; // es6 环境下会报错
// {
//     console.log(a); // 暂存死区
//     let a = 2;
// }
// console.log(a);

// babel可以es6 转化到es5 其实不会报错

// var a = 1; // es6 环境下会报错

// {
//   console.log(_a); // 暂存死区

//   var _a = 2;
// }
// console.log(a);



for(var i = 0 ; i< 10;i++){
    // 作用域链
    setTimeout(()=>{
        console.log(i);
    }); // 4ms mdn
}
// https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout

// 常量
const a = {}; // 深度改变 只要不改变空间即可
a.x = 100;
console.log(a);


// eslint let 自动帮你转化成const 

// 这个空间不销毁 你不知道的javascript
