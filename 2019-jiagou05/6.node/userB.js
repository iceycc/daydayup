let path = require('path')
let fs = require('fs')
let vm = require('vm')

function Module(id){
  this.id = id;
  this.exports = {}
}
Module._extensions = {};
const wrapper = [
  '(function(export,module,require,__dirname,__filename){'
  ,
  '})'
]
Module._extensions['.js'] = function(module){
  let scritp = fs.readFileSync(module.id,'utf8') //读文件
  let functStr = wrapper[0] + scritp + wrapper[1];
  let fn = vm.runInThisContext(functStr);
  fn.call(module.exports,module.exports,myRequire);
}

function myRequire(filePath){
  let absPath = path.resolve(__dirnamem,filePath);
  let module = new Module(absPath)
  module.load();
  return module.exports
}
let r = myRequire('./a.js')

console.log(r)