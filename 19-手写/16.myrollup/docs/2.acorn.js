let acorn = require('acorn')
const walk = require('./walk')
// esprima estraverse
// babel babel/traverse
const ast = acorn.parse(`import $ from 'jquery';import _ from 'lodash'`,{
    location:false,
    ranges:false,
    sourceType:'module',
    ecmaVersion:8
})

let ident = 0;

const padding = ()=>" ".repeat(ident)

ast.body.forEach(statement=>{
    // console.log(statement)
    // statement就是顶级语句，walk是以深度优先遍历树
    walk(statement,{
        enter(node,parent){
            console.log(padding()+node.type);
            ident+=2;
        },
        leave(node){
            ident-=2;
            console.log(padding()+node.type);
        }
    })
})
