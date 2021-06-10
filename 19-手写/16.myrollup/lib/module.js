const {parse} = require("acorn")
const MagicString = require('magic-string') // 处理字符串的工具类
let analyse = require('./ast/analyse');
const path = require('path')
function hasOwnProperty(obj,prop){
    return Object.prototype.hasOwnProperty.call(obj,prop);
}
class Module {
    constructor({code, path, bundle}) {
        // 处理字符串的类
        this.code = new MagicString(code, {filename: path});
        this.path = path;
        this.bundle = bundle;
        this.ast = parse(code, {
            ecmaVersion: 8,
            sourceType: 'module'
        })
        this.analyse()
    }

    // 解析 ast
    analyse() {
        this.imports = {}; // 导出
        this.exports = {}; // 导入
        this.modifies = {}; // 修改
        this.ast.body.forEach(node => {
            // 导入语句
            if (node.type === 'ImportDeclaration') {
                let source = node.source.value;
                // console.log(source) './msg.js'
                node.specifiers.forEach(specifier => {
                    const localName = specifier.local.name; // 本地变量名 ， 可以重命名
                    const name = specifier.imported.name; // 导入的变量
                    // console.log(localName,name)
                    // 当前模块有一个变量localName，它从是source导入的name变量
                    // this.imports['age'] = {source:'./msg',name:'age'}
                    this.imports[localName] = {source, name}
                })

            }
            // 导出语句
            else if (node.type === 'ExportNamedDeclaration') {
                const VariableDeclaration = node.declaration;
                const name = VariableDeclaration.declarations[0].id.name;
                // console.log(name,VariableDeclaration.declarations[0].init.value)
                // 记录本模块导出了哪些变量，是哪个节点导出的
                this.exports[name] = {node,localName:name,expression:VariableDeclaration}

            }
        })
        analyse(this.ast, this.code, this)
        // 在当前模块定义一个变量definitions，存放所有的变量定义语句
        this.definitions = {};
        this.ast.body.forEach(statement=>{
            Object.keys(statement._defines).forEach(name=>{
                // 此模块内定义到全局变量名，值是定义此全局变量到语句
                this.definitions[name] = statement;
            })
        })
    }

    expandAllStatements() {
        // 重点！！todo

        let allStatements = [] // 展开的当前模块所有语句
        this.ast.body.forEach(statement => {
            if(statement.type === 'ImportDeclaration') return; // 不需要将import语句放到结果里去
            let statements = this.expandStatements(statement)
            allStatements.push(...statements)
        })
        return allStatements
    }

    //
    expandStatements(statement) {
        // todo var 语句没有被摇掉？
        statement._include = true; // 标记为已经包含在输出结果里
        let result = [];
        // 真正的展开操作在这。
        const dependencies = Object.keys(statement._dependsOn); // [name]
        dependencies.forEach(name=>{
            let definition = this.define(name); // 找到name变量到定义语句，然后返回
            console.log(definition)
            result.push(...definition)
        })
        result.push(statement)
        return result
    }
    define(name){
        // 判断这个变量是不是导入到变量
        // this.imports[localName] = {source,name,localName}
        if(hasOwnProperty(this.imports,name)){
            const importDeclaration = this.imports[name];
            // 创建依赖到模块 source ./msg
            let module = this.bundle.fetchModule(importDeclaration.source,this.path)
            const exportDeclaration = module.exports[importDeclaration.name];
            return module.define(exportDeclaration.localName)
        }else{
            let statement = this.definitions[name];
            if(statement && !statement._include){
                return this.expandStatements(statement)
            }else{
                return [];
            }
        }
    }
}

module.exports = Module
