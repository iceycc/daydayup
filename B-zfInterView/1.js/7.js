/**
 * 作用域链在函数创建的时候就已经确定了，跟在哪执行没有关系 
 */
function one() {
    var a = 1;
    function two() {
        debugger
        console.log(a);
    }
    console.dir(two);
    //two['[[Scopes]]'] = [oneExecutionContextVo, globalExecutionContextVo];
    return two;
}
var a = 2;//window.a=2
var outer_two = one();
outer_two();
//现在开始代码执行
//执行上下文执行有二个阶段，第一个是编译阶段，第二个是执行阶段
//编译阶段会寻找里面的var变量声明和函数声明，进行变量提升
var globalExecutionContextVo = {
    one: `()=>{}`,//函数声明的话会声明并赋值 
    a: undefined,//var变量会声明，但不是不赋值
    outer_two: undefined
}
var globalExecutionContext = {
    VO: globalExecutionContextVo,
    scopeChain: [globalExecutionContextVo]
}
// 开始执行
globalExecutionContext.VO.a = 2;
//进入one函数执行的时候的执行上下文的编译阶段  function var
//two这个函数的作用域链其实是在创建oneExecutionContextVo的时候确定的 
var oneExecutionContextVo = {
    two: {
        twoFunction: `twoFunction`,

    },
    a: undefined
}
var oneExecutionContext = {
    VO: oneExecutionContextVo,
    scopeChain: [oneExecutionContextVo, globalExecutionContextVo]
}
//开始执行oneExecutionContext的执行阶段
oneExecutionContext.VO.a = 1;
globalExecutionContext.VO.outer_two = 'two';
//two
var twoExecutionContextVo = {}
// two这个函数的作用域其实并不是在这个时候，也就是不是在two执行的时候创建或确定的！
var twoExecutionContext = {
    VO: twoExecutionContextVo,
    scopeChain: [twoExecutionContextVo, ...two['[[Scopes]]']]
    //scopeChain: [twoExecutionContextVo, oneExecutionContextVo, globalExecutionContextVo]
}


