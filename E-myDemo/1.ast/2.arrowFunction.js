// 直接用babel来实现
// babel-core 转化

// 改ast，babel-types

let babel = require('babel-core');
let t = require('babel-types');

// let code = `let sum = (a,b) => {return a+b}`;
let code = `let sum = (a,b) => a+b`;

// .babelrc
console.log(code)
let ArrowPlugin = {
  visitor:{
    // 匹配type=ArrowFunctionExpression
    ArrowFunctionExpression(path){
      let node = path.node
      // console.log(node)
      let params = node.params
      let body = node.body
      // 判断body是否为代码块，
      if(!t.isBlockScoped(body)){
        // 不是代码块，兼容箭头函数的问题 简写模式
        let returnStatement =t.returnStatement(body) // 创造return代码块
        body = t.blockStatement([returnStatement]) // 
      }
      // 生成一个普通函数表达式
      let funcs = t.functionExpression(null,params,body,false,false)
      path.replaceWith(funcs)
    }
  }
}
let r =babel.transform(code,{
  plugins:[
    ArrowPlugin
  ]
})


console.log(r.code)