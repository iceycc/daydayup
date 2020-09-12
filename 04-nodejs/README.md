Node
## node
- 

## nodejs是什么
1. v8 事件驱动 非阻塞I/O
2. 在chrome和node中写js的不同？
   1. nodejs没有浏览器的API控制浏览器
   2. nodejs提供api控制整个计算机
## nodejs可以做什么
1. web服务 腾讯视频
   1. 搜索引擎优化 + 首屏速度优化  = 服务端渲染
   2. 服务端渲染 + 前后端同构 
2. 构建工作流
   1. gulp-cli、webpack
   2. 构建工具不会永远不出问题
   3. 构建工具不会永远满足需求
   4. 之前可以用java、ruby等
   5. 使用nodejs做js构建工具
3. Visual Studio Code
4. 游戏 wayward
5. 客户端应用 twitch.tv
   1. 在已有的网站开发应用
6. 可拓展性
   1. 大型应用需要给使用者自定义模块的能力
   2. 使用nodejs做复杂的本地应用
      1. 可以利用js的灵活性提供外部扩展
      2. JS庞大的开发者基数让他们的灵活性得到利用

## nodejs版的极客时间网站
- 列表
  - 打通前后台
  - 服务端渲染
- 详情页
  - 网页路由
  - 异步加载
- 播放页
  - API服务器

## 什么是技术预研

- 分析要做的需求，找出技术难点
- 针对每个技术难点进行攻克
- BFF层：Backend for Frontend
  - chrome <---> node  <-----> 微服务:`['播放服务','播放服务','个人信息','广告']`
  - 对用户侧提供HTTP服务
  - 使用后端RPC服务
- nodejs是怎么跑起来的
  

## nodejs环境搭建
- chrome安装 + vscode安装 +
- node安装
  - 官方：LTS稳定 current最新版
- 查看是否安装成功 node -v  node -v
- window 安装 和 mac安装  全局环境变量

## 第一个node.js程序 - 石头剪头布游戏
- 运行方式
- node全局变量
  

## commonjs
- script标签  
  - 脚本变多时，需要手动管理加载顺序
  - 不同脚本之间逻辑调用，需要通过全局变量通过全局变量的方式
  - 没有html
- commonjs模块规范
  - JavaScript社区发起，nodejs应用推广
  - 影响到了浏览器端端Javascript


## Node.js 异步


## Node.js 的非阻塞 I/O
-  I/O 即 Input/Output，一个系统的输入和输出。
-  阻塞 I/O 和非阻塞 I/O 的区别就在于系统接收输入再到输出期间，能不能接收其 他输入。
-  事件环

## 事件循环


## Node.js 异步编程 - callback
- 回调函数规范
  - error-first callback
  - node-style callback
- 异步流程控制
- npm: async.js
- thunk


## Node.js 异步编程 - Promise
- promise
  - 当前事件循环得不到的结果，但未来的事件循环会给到你结果
  - 状态机
    - pending
    - fulfilled / resolved
    - rejected
  - .then 和 .catch
    - resolved 状态的 Promise 会回调后面的第一个 .then
    - rejected 状态的 Promise 会回调后面的第一个 .catch
    - 任何一个 rejected 状态且后面没有 .catch 的 Promise，都会造成 浏览器 /node 环境 的全局错误
  - 执行 then 和 catch 会返回一个新 Promise，该 Promise 最终状态根据 then 和 catch 的回调函数的执行结果决定
    -  如果回调函数最终是 throw，该 Promise 是 rejected 状态
    -  如果回调函数最终是 return，该 Promise 是 resolved 状态
    -  但如果回调函数最终 return 了一个 Promise ，该 Promise 会和回调函数 return 的 Promise 状态保持一致
- Node.js 异步编程 – async/await
 -  async/await
    -  async function 是 Promise 的语法糖封装
    -  异步编程的终极方案 – 以同步的方式写异步
       -  await关键字可以“暂停”asyncfunction的执行
       -  await关键字可以以同步的写法获取Promise的执行结果
       -  try-catch可以获取await所得到的错误
    - 一个穿越事件循环存在的 function

## 什么是 HTTP 服务?
- 什么是 HTTP 服务?
  - 解析进来的 HTTP 请求报文
  - 返回对应的 HTTP 返回报文
- http模块
- fs模块
- url模块
- queryString模块


## express
- 特点
  - 路由
  - 高性能
  - 高测试
  - 处理http，重定向、缓存等
  - 模版引擎 14+
  - 脚手架快速搭建
- 洋葱模型
  - 问题：异步问题。
- 中间价


