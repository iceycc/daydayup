/**
 * 执行上下文
 * 每次函数执行的时候，会产生一个执行上下文,执行上下文是一个对象
 * 执行上下文里面会创建一个变量对象 ，里面存放着当前函数内的变量
 * 基本数据类型保存在变量对象里的，引用数据数据类型要单独在单堆内存里开辟空间保存。
 * 变量对象里保存的就是堆里的内存地址
 */
/* function task(m, n) {
    var a = 1;
    var b = {
        name: 'zhufeng'
    }
    debugger;
    var c = [1, 2, 3];
}
task(10, 20);
 */
//task的执行上下文
/* let taskExecutionContext = {
    this: window,
    scopeChain: [],
    //Variable Object 变量对象 里面存的是当前函数执行要使用到的变量
    VO: {
        m: 10,
        n: 20,
        a: 1,
        b: `xo1`,
        c: `xa1`
    }
} */
/*
基本数据类型的赋值 和引用数据类型的赋值不一样
*/
/* 
var a = 1;
var b = a;
b = 2;
console.log(a);
*/

/* let executionContext = {
    VO: {}
}
executionContext.VO.a = 1;
executionContext.VO.b = 1;
executionContext.VO.b = 2;
console.log(executionContext.VO.a); */


var m = { a: 1, b: 2 };// xo1
//如果是引用数据类型，赋值 的时候赋值 的是引用地址
var n = m; //n= xo1
n.a = 10;// {a:10,b:2}
console.log(m.a);//10

let executionContext = {
    VO: { m: { a: 1, b: 2 } }
}
executionContext.VO.n = executionContext.VO.m;
executionContext.VO.n.a = 10;
console.log(executionContext.VO.m.a);