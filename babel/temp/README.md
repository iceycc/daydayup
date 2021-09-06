## babel7

### `npm install --save-dev @babel/core @babel/cli`
- 核心库 @babel/core
- CLI命令行工具 @babel/cli

### 插件 plugins
- 语法插件：接续特定的语法
- 转换插件：启用响应的语法插件
```json
//.babelrc
{
    "plugins": ["@babel/plugin-transform-arrow-functions"]
}
```
### 预设 preset
如果要通过插件支持es新语法，需要装一堆插件。
通过使用或创建一个 preset 即可轻松使用一组插件。
```
@babel/preset-env
@babel/preset-flow
@babel/preset-react
@babel/preset-typescript
```
.babelrc
```json
{
    "presets": ["@babel/preset-env"]
}
```

.browserslistrc 指定兼容的环境
```
//.browserslistrc
> 0.25%
not dead
```

### Polyfill 垫片
- 上面的babel-env只是语法转换，一些api无法语法层面转换。需要进行polyfill支持了。

7.4之前：@babel/polyfill
- `npm install --save @babel/polyfill`
- core-js + regenerator runtime
- 全局引入 `import "@babel/polyfill" `
- 按需引入：@babel/preset-env 提供了一个 useBuiltIns 参数，
    - 设置值为 usage 时，就只会包含代码需要的 polyfill 。
    - 同时设置 `corejs` , `npm install --save core-js@3`
- 辅助函数抽离 @babel/plugin-transform-runtime 需要和 @babel/runtime 配合使用
- 避免修改全局函数：@babel/runtime-corejs3
    

### 补充
- 插件/预设补充知识
- 插件参数
- 插件的短名称

### 创建 Preset
```js
module.exports = function(){
    return {
        presets:['@babel/preset-env'],
        plugins:['A','B','C']
    }
}
```

### 配置文件


## babel的原理
 parsing -》 transforming -》Printing
- Parser(@babel/parser)：
- Traverser(@babel/traverse)： 
- Generator(@babel/generator)

