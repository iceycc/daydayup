/**
 * 执行上下文对象的VO栈
 */
function one() {
    var a = 1;
    var two = () => {
        var b = 2;
        var three = () => {
            var c = 3;
            debugger
            console.log(a, b, c);
        }
        three();
    }
    two();
}
one();
//作用域就是一个一个上下文吗 
//
var executeContextStack = [];
//全局上下文 
var globalExecuteContext = {
    VO: { one: '()=>{' }
}
executeContextStack = [globalExecuteContext]
var oneExecuteContext = {
    VO: { a: 1, two: '()=>{}' }
}
executeContextStack = [oneExecuteContext, globalExecuteContext]
var twoExecuteContext = {
    VO: { b: 2, three: '()=>{}' }
}
executeContextStack = [, twoExecuteContext, oneExecuteContext, globalExecuteContext]
var threeExecuteContext = {
    VO: { c: 3 }
}
executeContextStack = [threeExecuteContext, twoExecuteContext, oneExecuteContext, globalExecuteContext]
//console.log(a, b, c);
//变量的值是如何查找的
//console.log(a,b,c);
//作用域链的查找过程
function getVariableValue(varName) {
    for (let i = 0; i < executeContextStack.length; i++) {
        if (varName in executeContextStack[i].VO) {
            return executeContextStack[i].VO[varName];
        }
    }
}
console.log(getVariableValue('a'), getVariableValue('b'), getVariableValue('c'));