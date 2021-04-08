//高阶函数  把函数传入一个函数，返回一个新的函数 
//高阶函数 jS中的函数要比一般语言中高级一些，其它语言Java是不能把函数作为
//其它 函数的参数传递的，也不能把函数作为返回值
// 函数可以做为方法的参数和返回值
function calcuate(fn){
  return function(a,b){
      return fn(a,b);
  }
}
function sum(a,b){
   return a+b;
}
let newFunc = calcuate(sum);
let result = newFunc(2,3);
console.log(result);