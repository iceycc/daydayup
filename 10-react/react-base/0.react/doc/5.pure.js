/**
 * 纯 函数有两个特点
 * 1. 不能改变入参
 * 2. 不能影响作用作用域之外的变量
 */
function sum(a,b){
    return a+b;
}
function withdrawl(account,amount){
    account.balance = account.balance-amount;
}
let account = {name:'张三',balance:100};
withdrawl(account,10);

let obj = {name:'zhufeng',age:10}
function ajax(){
    let obj2 ={age:10};
    obj2.age = 20;
}
ajax()

// 界面 = 属性决定的