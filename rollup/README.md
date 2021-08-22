## 安装rollup
```
npm i @babel/core @babel/preset-env  @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript lodash rollup rollup-plugin-babel postcss rollup-plugin-postcss rollup-plugin-terser tslib typescript rollup-plugin-serve rollup-plugin-livereload -D
```
## 导出格式
5种目标格式：amd/es/iife/umd/cjs/system

源文件：
```js
let a = 'index'
export default a
```

1、cjs
```js
'use strict';
let a = 'index';
module.exports = a;
```

2、es
```js
let a = 'index';
export default a;
```

3、iife 
```js
var calculator = (function () {
	'use strict';

	let a = 'index';

	return a;

}());
```

4、umd
```js
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.calculator = factory());
}(this, (function () { 'use strict';

	let a = 'index';

	return a;

})));
```

5、amd
```js
define(function () { 'use strict';

	let a = 'index';

	return a;

});
```

6、system
```js
System.register('calculator', [], function (exports) {
	'use strict';
	return {
		execute: function () {

			let a = exports('default', 'index');

		}
	};
});

```

## 支持babel

## tree-shaking
Tree-shaking的本质是消除无用的js代码
rollup只处理函数和顶层的import/export变量

## 使用第三方模块
rollup.js编译源码中的模块引用默认只支持 ES6+的模块方式import/export

如何支持commonJs模块化？
`npm install @rollup/plugin-node-resolve @rollup/plugin-commonjs lodash  --save-dev`

## 使用cdn引入

## 使用typescript

## 压缩js
`npm install rollup-plugin-terser --save-dev`
## 编译css
`npm install  postcss rollup-plugin-postcss --save-dev`

## 本地开发服务器
`npm install rollup-plugin-serve --save-dev`
## 问题？
- cjs比较多？es6modules？cjs支持tree-shaking吗
- tree-shaking如何判断变量是否被使用到？
- commonJS为啥不支持tree-shaking

## 自己写一个rollup
### 思路
- 读文件entry

- 写文件output

### todo
[我的rollup](../19-手写/16.myrollup)



