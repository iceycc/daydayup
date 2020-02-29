// 实现模块的按需加载
// import {Button} from 'antd';
// babel-plugin-import

// import {Button,Alert} from 'antd;
// =>
// import Button from 'antd/lib/button'
// import Alert from 'antd/lib/button'

let babel = require('babel-core')
let t= require('babel-types')
let code = `import {Button,Alert} from 'antd';`
let importPlugin = {
  visitor:{
    ImportDeclaration(path){
      let {node} = path;
      let source = node.source.value
      let specifiers = node.specifiers
      // 判断是否为默认导出
      if(!t.isImportDefaultSpecifier(specifiers[0])){
        // 不是默认导出就得按需导出
        specifiers = specifiers.map(specifier => {
          return t.importDeclaration(
            [t.importDefaultSpecifier(specifier.local)],
            t.stringLiteral(`${source}/lib/${specifier.local.name.toLowerCase()}`)
            )
        })
        path.replaceWithMultiple(specifiers)
      }
    }
  }
}
let r =babel.transform(code,{
  plugins:[
    importPlugin
  ]
})

console.log(r.code)
