/**
 * 对模块的语法树进行分析
 * 当前的模块内有哪些作用域，这些使用有哪些变量，然后才能知道哪些是外部导入的变量，哪些是内部声明的变量
 * @param ast 模块对应的语法树
 * @param magicString 源代码，MagicString类的实例
 */
const Scope = require("./scope");
let scope = new Scope()
const walk = require("./walk")
// 解析ast树，
// 1、构建作用域链
// 2、给树节点增加可用标签
function analyse(ast, magicString) {
    ast.body.forEach(statement => {
        // 构建作用域链：添加变量到当前的作用域中,
        function addToScope(declarator,isBlockDeclaration = false){
            // scope
            var name = declarator.id.name;
            scope.add(name,isBlockDeclaration); // 把变量添加到scope作用域对象里
            if(!scope.parent){
                // 没有父作用域说明是顶级作用域,他声明的变量就是顶级作用变量了。
                statement._defines[name] = true
            }
        }
        Object.defineProperties(statement, {
            _defines:{value:{}}, // 当前的节点声明的变量
            _dependsOn:{value:{}}, // 当前的节点依赖了哪些外部变量
            _modifies:{value:{}}, // 修改的语句
            _included:{value:false,writable:true}, // 此语句是已经包含到输出语句了
            _source: { value: magicString.snip(statement.start, statement.end) }
        })
        //
        walk(statement,{
            enter(node){
                let newScope;
                switch(node.type){
                    case 'FunctionDeclaration': // 函数类型
                        // 函数声明 会创建一个新的作用域对象
                        const params = node.params.map(item=>item.name);
                        newScope = new Scope({
                            parent:scope,
                            params,
                            block:false, // 函数就是false
                        })
                        break;
                    case 'BlockStatement':
                        // BlockStatement 块级语句
                        newScope = new Scope({
                            parent:scope,
                            block:true // 块级作用域
                        })
                        break;
                    case 'VariableDeclaration': // 变量
                        node.declarations.forEach((variableDeclarator)=>{
                            if(node.kind === 'let' || node.kind === 'const'){
                                // 块级声明
                                addToScope(variableDeclarator,true)
                            }else{
                                addToScope(variableDeclarator)
                            }
                        })
                        break;
                }
                if(newScope){
                    // 说明此节点创建了新的作用域
                    Object.defineProperty(node,'_scope',{value:newScope});
                    scope = newScope; // 让当前作用域等于新作用域
                }

            },
            leave(){}
        })
    });
    // 找出当前模块依赖了哪些外部变量
    ast.body.forEach(statement => {
        function checkForReads(node){
            if(node.type === 'Identifier'){
                // 如果是标识符，说明使用到或者读到这个变量了
                // let DefiningScope = scope.findDefiningScope(node.name); // 找到该变量定义到作用域
                // if(!DefiningScope){ // 如果找不到定义到作用域，
                    statement._dependsOn[node.name] = true; // 添加外部依赖
                // }
            }
        }
        function checkForWrites(node) {
            function addNode(node){
                statement._modifies[node.name] = true
            }
            if (node.type === 'AssignmentExpression') {
                // 赋值表达式 a=10
                addNode(node.left)
            }else if(node.type === 'UpdateExpression'){
                // 更新表达式 a++
                addNode(node.argument)
            }
        }
        walk(statement,{
            enter(node){
                if(node._scope) scope = node._scope;
                checkForReads(node);// 检查读取的标识符
                checkForWrites(node); // 检查修改了哪些标识符
                if(node.type === 'Identifier'){
                    // 如果是标识符，说明使用到或者读到这个变量了
                    let DefiningScope = scope.findDefiningScope(node.name); // 找到该变量定义到作用域
                    if(!DefiningScope){ // 如果找不到定义到作用域，
                        statement._dependsOn[node.name] = true; // 添加外部依赖
                    }
                }
            },
            leave(node){
                if(node._scope) scope = scope.parent;
            }
        })
    })

}
module.exports = analyse;
