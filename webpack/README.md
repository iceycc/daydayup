## 流程

https://mp.weixin.qq.com/s/_Hyn_sb8mki6aYTXwVZe6g

准备阶段

- 合并用户配置
- 参数校验
- 合并最终配置
- 创建compiler对象
- 遍历用户的plugins，执行apply方法
- 加载各种内置插件 new WebpackOptionsApply().process



构建阶段 module => ast => dependences => module

- handleModuleCreate根据文件类型创建module
- loader-runner加载文件对应的loader转义module的内容
- 调用acorn将 js-》ast
- 遍历ast，触发钩子
  - 解析依赖的资源
  - moduel.addDependency 将依赖对象添加到依赖列表中
- 遍历完ast，调用 `module.handleParseResult` 处理模块依赖
- 对于module新增的依赖，调用handleModuleCreate，控制流回第一步
- 所有依赖都解析完毕后，构建阶段结束



生成阶段

- `seal` 函数主要完成从 `module` 到 `chunks` 的转化，核心流程：

- 构建本次编译的chunkGraph
- 遍历  `compilation.modules` 集合，将`module` 安 `entry/动态引入`的规则分配给不同的chunk对象
- 遍历完成后，得到完整的chunks对象，调用createXXXAssest方法
- createXXXAssest遍历module/chunk，调用compilation.emitAssets方法将asset信息记录到compilation.assets对象上
- 触发seal回调，控制回到 compiler对象



`SplitChunksPlugin`