const fs = require('fs')
const path = require('path')
const Module = require('./module')
const MagicString = require('magic-string')
class Bundle{
    constructor(options){
        this.entryPath = path.resolve(options.entry.replace(/\.js$/,'')+'.js');
        this.modules = {};//存放所有的模块
    }

    /**
     * 编译入口模块和他依赖的模块
     * @param filename 输出的文件路径
     */
    build(filename){
        // const code = fs.readFileSync(this.entryPath);// 读
        // fs.writeFileSync(filename,code) //  写

        // 每一个文件都是一个模块
        // 语句转成ast语法树对象
        let entryModule = this.fetchModule(this.entryPath);

        // 从入口模块文件出发,展开所有的语句，赋给bundle.statements
        this.statements = entryModule.expandAllStatements()
        const {code} = this.generator(); // 根据this.statements语句生产最终的源代码
        fs.writeFileSync(filename,code)
    }

    /**
     * 获取这个路径对应的模块实例
     * @param importree 文件路径可以是相对路径也可以是绝对路径，子模块
     * @param importer 导入importree的模块，父模块
     * @returns {Module}
     */
    fetchModule(importree,importer){

        let route; // 路径
        if(!importer){ // 入口文件要传绝对路径
            route = importree;
        }else{
            if(path.isAbsolute(importree)){
                // 绝对路径
                route = importree;
            }else{
                // 相对路径
                route = path.resolve(path.dirname(importer),importree.replace(/\.js$/,'')+'.js');
            }
        }
        if (route) {
            let code = fs.readFileSync(route, 'utf8');
            return new Module({
                code, // 代码
                path: importree, // 路径
                bundle: this // 属于哪个bundle实例
            });
        }
    }
    generator(){
        let magicStringBundle = new MagicString.Bundle();
        this.statements.forEach(statement =>{
            const source = statement._source.clone();
            if(/^Export/.test(statement.type)){ // todo ? Export
                source .remove(statement.start,statement.declaration.start)
            }
            magicStringBundle.addSource({
                content:source, //
                separator:'\n'
            })
        })
        return {
            code: magicStringBundle.toString()
        }
    }
}

module.exports = Bundle
