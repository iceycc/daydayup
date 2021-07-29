const { getAST,getDependencis,transform }  = require('./parser')
const path = require('path');
const ast = getAST(path.join(__dirname,'../src/index.js'))
// console.log(ast)
const dependencis = getDependencis(ast)
console.log(dependencis)
const target = transform(ast)
console.log(target)