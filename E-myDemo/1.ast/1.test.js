let esprima = require('esprima')

let code = `function ast(a,b){}`

let tree = esprima.parseScript(code)
// let tree = { 
//   "type": "Program",
//   "body": [
//       {
//           "type": "FunctionDeclaration",
//           "id": {
//               "type": "Identifier",
//               "name": "ast"
//           },
//           "params": [
//               {
//                   "type": "Identifier",
//                   "name": "a"
//               },
//               {
//                   "type": "Identifier",
//                   "name": "b"
//               }
//           ],
//           "body": {
//               "type": "BlockStatement",
//               "body": []
//           },
//           "generator": false,
//           "expression": false,
//           "async": false
//       }
//   ],
//   "sourceType": "script"
// }
let estraverse = require('estraverse')
estraverse.traverse(tree,{
  enter(node){
    console.log('enter',node.name)
    if(node.type ==='Identifier' && node.name === 'ast'){
      node.name = 'test'
    }
  },
  leave(node){
    // console.log('leave',node.type)
  }
})
// enter Program
// enter FunctionDeclaration
// enter Identifier
// leave Identifier
// enter Identifier
// leave Identifier
// enter Identifier
// leave Identifier
// enter BlockStatement
// leave BlockStatement
// leave FunctionDeclaration
// leave Program


let escodegen = require('escodegen')
let r =escodegen.generate(tree)
console.log(r)


// babel babel-plugin-arrow-function