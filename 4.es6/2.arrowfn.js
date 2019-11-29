/**
 * 箭头函数
 * 1. 没有this
 * 2. 没有argument  let fn = (...args)=>{ }
 * 3. 没有prototype
 * 如果箭头函数的参数只有一个 可以省略括号
 */
// 箭头函数 特点
// 没有this 没有 arguments  没有prototype
// 如果箭头函数的参数是一个 可以省略括号

// let fn  = (...args)=>{
//     console.log(args);
// }
// console.log(fn());
let a = 100;
var b = 100;
// let this = window
let obj = {
    a:1,
    fn1(){
        setTimeout(function(){
            console.log(this.a,this)
            console.log(this.b)
        })
    },
    fn:()=>{
        // let this = obj
        setTimeout(()=>{
            console.log(this.a)
        })
    }
}
obj.fn1(); // 浏览器中this是window
obj.fn(); // 



// 模板字符串
let name = '珠峰';
let age = 10;
let str = "<ul><li>${name} ${age}</li>";
// 让正则少匹配 可以使用 .+?  [^}]+
let result = str.replace(/\$\{([^}]+)\}/g,function(data){
    console.log(data)
    console.log(arguments)
    return eval(arguments[1])
});
console.log(result);








