/**
 * 调试node：
 * 1) 在浏览器中调试 node useA.js --inspect-brk 借助chrome
 * 2) vscode 调试
 * compileFunction 内部方法
**/

// 实现函数柯里化和反柯理化
// 实现new的原理
// 实现数组扁平化 flatten方法
// 实现简易的commonjs规范
// 实现Promise.finnaly


// let r = require('./a');
let path = require('path');
let fs = require('fs');
let vm = require('vm');
function Module(id){
    this.id = id;
    this.exports = {}
}
// 根据不同的拓展名 执行不同的函数
Module._extensions = {};
const wrapper = [
    '(function(exports,module,require,__dirname,__filename){'
    ,   
    '})'
]
Module._extensions['.js'] = function(module){
    let script = fs.readFileSync(module.id,'utf8'); // 读文件
    // 下面会进行一些特殊符合的转移等操作
        // 
        // 省略。。。
    // 
    let functStr = wrapper[0] + script + wrapper[1];
    let fn = vm.runInThisContext(functStr);// 返回一个真实的函数
    fn.call(module.exports,module.exports,module,myRequire);
}
Module._extensions['.json']= function(module){
    let script = fs.readFileSync(module.id,'utf8');
    module.exports = JSON.parse(script);
} 
Module.prototype.load = function(){
    let ext = path.extname(this.id);
    Module._extensions[ext](this)
}
function myRequire(filePath){
    // 把当前的filePath变成一个绝对路径
    let absPath = path.resolve(__dirname,filePath);
    let module = new Module(absPath);
    module.load(); // module.exports = 'hello'
    return module.exports
}
let r = myRequire('./b.json');
console.log(r);
// 怎么实现模块的缓存
// 尝试文件的查找 .js  .json  抛出异常



// 1) 在浏览器中调试 node useA.js --inspect-brk 借助chrome
// 2) vscode 调试

// Module._load 加载一个模块
// Module._resolveFilename 会自动添加.js .json .node给我找到这个文件 返回一个绝对的路径
// 模块就是一个对象 通过路径来创建 id,exports = {}
// module.load 加载当前创建的模块
// Module._extensions 根据不同的后缀名来处理逻辑 



