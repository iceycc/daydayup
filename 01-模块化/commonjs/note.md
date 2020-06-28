## CommonJS 和 ES6 Module 究竟有什么区别？

## CommonJS 规范
###  模块定义和使用

```js
// 导出：
exports.count = 1;
// 导入
const counter = require('./counter');
console.log(counter.count) // 1
```

or
```js
// 导出
module.exports = 2
// 导入
const counter = require('./counter');
console.log(counter) // 2
```

CommonJS 的模块主要由原生模块 module 来实现：
```js
Module {
    id: '/xxx/daydayup/01-模块化/commonjs/a.js', // 如果是mainModule id固定为 '.', 如果不是则为模块的绝对路径
    exports: { count: 1 }, // 模块最终exports
    parent: Module// // 第一个引用该模块的模块
    filename: '/xxx/daydayup/01-模块化/commonjs/a.js',// 当前模块的绝对路径 
    loaded: false, // 模块是否已加载完毕
    children: [Module],
    paths: // // 模块的搜索路径
     [ '/xxxx/Documents/daydayup/01-模块化/commonjs/node_modules',
       '/xxxx/Documents/daydayup/01-模块化/node_modules',
       '/xxxx/Documents/daydayup/node_modules',
       '/xxxx/Documents/node_modules',
       '/xxxx/node_modules',
       '/node_modules'
       ] }

```

### require 从哪里来？
commonJS模块规范中，`require`加载模块。`exports`模块输出，还有`module，__filename, __dirname`这些变量，为什么不需要引入就能够使用呢？

原因就是Node解析js模块时，会先读取内容，然后将模块进行包裹，在外层包裹一个function，传入变量。再通过 [vm.runInThisContext](http://nodejs.cn/api/vm.html)将字符串转成Function形成作用域，避免污染全局。

require 最终调用的也是 Module._load 方法。

### 模块的查找过程。

module.paths:
```js
[ 
  '/Users/evan/Desktop/demo/node_modules',
  '/Users/evan/Desktop/node_modules',
  '/Users/evan/node_modules',
  '/Users/node_modules',
  '/node_modules'
]
// 除此之外，还会查找全局路径（如果存在的话）
[
  execPath/../../lib/node_modules, // 当前 node 执行文件相对路径下的 lib/node_modules
  NODE_PATH, // 全局变量 NODE_PATH
  HOME/.node_modules, // HOME 目录下的 .node_module
  HOME/.node_libraries' // HOME 目录下的 .node-libraries
]

```

模块查找过程会将软链替换为系统中的真实路径，


### 模块加载相关

