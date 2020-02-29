let babel = require('babel-core')
let t = require('babel-types')
let esprima = require('esprima')

function PersonEs5(name){
  this.name = name
}
PersonEs5.prototype.getName=function(){
  return this.name
}

let code = `
class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }
  getName(key){
    return key + this.name
  }
  getAge(key){
    return key + this.name
  }
}
`
// console.log(esprima.parseScript(code))
let ClassPlugin = {
  visitor:{
    ClassDeclaration(path){
      let {node} = path;
      let className = node.id.name;
      className = t.identifier(className)// 函数名字必须是一个标识符
      let classList = node.body.body
      let body = t.blockStatement([]) // 
      let funcs = t.functionDeclaration(className,[],body,false,false)
      path.replaceWith(funcs)
      let es5Func = []
      classList.forEach((item,index)=>{
        // 函数的代码题
        // console.log(item.params)
       
        let params = item.params.length ? item.params.map(item=>item.name) : [] // 获取参数
        params = t.identifier(params) // 增加参数标记
        let body = classList[index].body;
        if(item.kind === 'constructor'){
          // 如果是构造函数生成新的函数，将默认的空函数替换调
          funcs = t.functionDeclaration(className,[params],body,false,false)
         
        }else{
          // 其他情况就是原型上的方法
          // Person.prototype.getName = function(){}
          let protoObj = t.memberExpression(className,t.identifier('prototype'))
          let left = t.memberExpression(protoObj,t.identifier(item.key.name));
          let right = t.functionExpression(null,[params],body,false,false)
          let assign = t.assignmentExpression('=',left,right)
          es5Func.push(assign)
        }
      })
      if(es5Func.length==0){
        path.replaceWith(funcs)
      }else{
        // 有原型上的方法
        es5Func.push(funcs)
        // 替换n个节点
        path.replaceWithMultiple(es5Func)
      }
    }
  }
}
let r = babel.transform(code,{
  plugins:[
    ClassPlugin
  ]
})
console.log(r.code)