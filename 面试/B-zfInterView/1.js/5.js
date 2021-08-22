/**
 * 执行上下文栈
 * 栈是一个数据，里面放着很多执行上下文
 * 每次函数执行，都会产生一个执行上下文
 * 全局上下文的VO，也被称为GO (Global Object) 全局对象
 * 全局对象上的属性可以在任何地方被访问到
 * 在浏览端GO就是VO就是window
 */
var globalExecutionContext = {
    VO: {
        setTimeout,
        Math,
        String
    }
}
var window = globalExecutionContext.VO;
window.setInterval;


function one() {
    var a = 10;
    console.log();
}
one();
let oneExecutionContext = {
    //oneExecutionContext.VO对象我们是无法访问和获取的
    //为什么不让访问，是为了保护里面的变量不能被随意修改
    VO: {
        a: 10
    }
}