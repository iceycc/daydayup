function fn(){
  var a = 1;
  {
    let a = 3;
    var c = 4
    let d = 5
    console.log(a,b,c,d)
  }
  {
    let b =6
    let d = 7
    console.log(a,b,c,d)
  }
}
fn()


// es5 this vo scopeChain 


// es6
// VE 变量环境  function val
// LE 词法环境
// 函数执行会创建执行上下文，代码块创建词法环境