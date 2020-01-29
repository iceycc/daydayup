// module.exports / exports.xxx = 123 
// module.exports.xxx = 123;
// global.xxx 特点污染全局 
// global.a = 123;
// exports.a= 'hello';
module.exports = 'hello';
console.log('file')
console.log(this)
console.log(module)
console.log(exports === module.exports) // true
// 错误写法 exports = 123;



// 内部实现：
// expors = module.exports = {}
// return module.exports

// 三种导出的方式
// exports = 'hellow' //错误写法：这么无法改变module.exports
exports.a = 'abc'  // => 改变后   module.exports = {a:'abc'}
module.exports = 'abc'  // => 改变后   module.exports = {a:'abc'}
global.a = 123; // 污染全局变量

