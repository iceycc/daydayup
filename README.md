

## vim
1. mac vim安装配置：https://blog.csdn.net/weixin_38169413/article/details/83098902
2. vim分屏：https://blog.csdn.net/derkampf/article/details/72629875
## mac环境配置
- homebre
  - 官网：https://brew.sh/
  - 切换源：https://www.jianshu.com/p/bb60d6b8a043 
3. node 
   1. npm
   2. nvm [nvm](https://github.com/nvm-sh/nvm/blob/master/README.md)
   3. nrm
4. git

## git
### git子模块 submodule
- 子模块的添加
  - git submodule add <url> <path>：其中，url为子模块的路径，path为该子模块存储的目录路径。
- 子模块的使用
  - git submodule init
  - git submodule update
  - 或 git submodule update --init --recursive
- 子模块的更新
  - 在项目中，进入到子模块目录下，执行 git pull更新，查看git log查看相应提交。
  - 完成后返回到项目目录，可以看到子模块有待提交的更新，使用git add，提交即可。
- 删除子模块
  - rm -rf 子模块目录 删除子模块目录及源码
  - vi .gitmodules 删除项目目录下.gitmodules文件中子模块相关条目
  - vi .git/config 删除配置项中子模块相关条目
  - rm .git/module/* 删除模块下的子模块目录，每个子模块对应一个目录，注意只删除对应的子模块目录即可
  - 如果还报错：删除后，需要提交.gitmodule；git rm --cached 子模块名称
- 保留代码回退：git reset --soft HEAD^

### git
- git config --global user.name 'xxx'
- git conifg --global user.email 'xxx@qq.com'
- ssh-keygen -t rsa -C 'xxx@qq.com'

## promise
1. 高阶函数 
   1. aop
   2. 事务 transaction
2. 处理异步的方式
   1. 回调函数：after函数 三次后触发
   2. 发布订阅 + 回调函数
   3. promise
3. 判断数据类型
   1. typeof 注意null,function
   2. instanceof 指向原型链中的某一个
   3. Object.prototype.toString.call()
4. 发布/订阅
   1. 中介：Events
      1. stack 订阅的事件队列
      2. on 订阅
      3. emit 发布
5. 观察者模式
   1. 观察者 Observer
   2. 被观察者 Subject
      1. attach 添加观察者
      2. setState 通知观察者
6. promise A+规范解读
   1. promse解决了什么问题？
      1. 回调地狱
      2. 错误处理
      3. 多个异步的问题
7. promise 实现
   1. 三个状态：pending、fulfilled、rejected
   2. 执行器 executor((resolve,reject)=>{})
   3. 链式调用，返回一个新的Promise + 发布订阅
   4. 错误处理，在构造函数 用 try catch进行错误捕获
   5. then的实现：返回一个新的Promise
   6. TODO:resolvePromise：应该判断 别人的promise 如果失败了就不能在调用成功 如果成功了不能在调用失败
   7. 测试promise promises-aplus-tests
8. 实现一个promise:then、all、race、finally、resolve、reject、defer、catch、abort（中断/自写）
   1. then 
      1. 返回一个新的promise
      2. 判断此时的状态
      3. 如果是Promise里是异步函数，不会立刻执行，初识时是pending状态，此时成功回调和失败回调都进行保存，push到对应的回调队列中
      4. 成功状态或者失败状态 立刻执行对应的回调函数，并将参数回传
   2. defer:延迟对象，Q库，减少套用
   3. finally
      1. 成功失败都会返回Promise.resolve(callback()).then(()=>data/throw err)
      2. 无论如何都执行 ，
      3. 但是如果返回的是一个promise需要等待这个promise之行完在继续向下执行
   4. catch this.then(null,errCallback)
9. generator函数
10. var let const
11. Symbol Symbol.for Symbol.keyfor
12. 迭代器 iterator
    1. 元编程：Symbol.iterator
13. spread ...
    1.  解构赋值
    2.  展开运算符
    3.  剩余运算符
    4.  类数组转换成数组
14.拷贝
   1. 浅拷贝 Object.assign {...obj}
   2. 深
15. set-map
    1.  set:交集 并集 差集
    2.  weakMap
16.Object.defineProperty

## node
1. 

fs文件操作
1. fs文件操作 常用api （异步 + 同步）
2. mkdir创建目录-多级目录创建
3. rmdir删除目录-广度/深度

## stream流的概念
1. 可读流、可写流、双攻流、转化流
   
HTTP: 基于node的全面解析
1. 静态服务器 http-server
2. 缓存的处理
3. 服务器压缩
4. CORS跨越处理
5. 实现文件上传 form-data
6. 实现多语言
7. 图片防盗链 referer
8. 简单的代理
9. 设置cookie，签名cookie sha256
10. 设置session

## KOA
1. 手写KOA。洋葱模型、中间件的实现
2. koa-bodyParser 请求体的解析 中间件的实现
3. koa-static 实现静态文件中间件的实现
4. koa-views  实现模板引擎
5. koa-router
6. koa-multer
7. koa-session

## 第三方包
1. path-to-regexp

## express  
1. 手写一个 express,内部实现了好多中间件
   1. 路由机制
   2. 中间件机制
   3. 错误处理机制
   4. 多级路由
   5. 路径参数
   6. app.param
   7. res.send()  // 封装了 res.end() 会对数字 字符串 对象等进行了处理。res.end()只支持字符串额
2. express.static()
3. express multer 解析文件上传 https://www.npmjs.com/package/multer
   1. 文件拖拽上传
4. express set cookie-parser
5. express express-session  
    

## cookie

## session

JWT
1. 是什么 优点 怎么做
// jwt-simple jsonwebtoken




## vue

## vuex-perssits




## react
1. jsx
2. react-dom的render函数的简单实现
3. ast
4. 什么是纯函数 、 纯组件
5. 组件的状态和属性
6. 函数组件
7. 类组件
   1. 更新state的方法
8. hasOwnProperty
9. this.setState是异步还是同步 原理
10. 什么是受控组件 什么是非受控组件
11. 如何获取dom
12. <></> = React.Fragment 代码片段
13. ref的使用：原生react组件input 、自定义组件(类组件和函数组件的区别)
14. React.forwardRef()
15. react是单向数据流 如何理解 ：只能从父 给 子 不能反过来
16. 子组件如果改变父组件的状态 props回调
17. 什么是脏组件
18. 旧生命周期
    1.  初始化 Initialization
    2.  装载 Mounting
    3.  更新 Updation
        1.  属性更新props
        2.  状态更新states
    4. 卸载 Unmounting
19. 请求数据为什么在componentDidMount调用？？https://blog.csdn.net/ky1in93/article/details/81362442
20. 新版的生命周期新增了什么，踢出了什么。
21. react中Content上下文是啥
22. ContentApi新版和旧版的用法，新版如何简单实现
23. PureComponent??  mome
24. 什么是高阶组件?手写一个logger高阶组件
25. 高阶组件多层嵌套也是hooks解决的问题之一
26. React.Fragment
27. render props
28. ReactDOM.createPortal(child, container) 将子节点渲染到父组件之外的dom节点
29. HOC
30. 错误边界 componentDidCatch 
31. Suspense
32. react-catch
33. React.Lazy

## domdiff
1. 操作真实dom的成本高
2. 在react中，用户对dom对操作其实就是对虚拟dom的操作，用户操作产生的数据改变或者state改变都会保存在虚拟dom上，然后对改变进行domdiff对计算，对比操作前后的虚拟dom树，把更改后的变化再同步到真实dom上。
3. 在react事件机制和声明周期钩子函数中，setState是批量更新的
4. domdiff的过程
   1. 对操作前后的dom树同一层节点进行对比，一层一层对比
   2. 只要碰到不一样的节点，就直接将原来的节点替换，包括子节点树


## react hooks
1. useState
2. useEffect
3. useCallback
4. useMemo
5. useReducer
6. useRef
7. useImperativeHandle
8. useLayoutEffect
9. useLayoutEffect =》return =》useEffect
10. 自己实现 useLogger 、useThunk、usePromise、useAjax

## 项目配置
``` js
create-react-app zhufeng_tract
yarn add customize-cra react-app-rewired --dev // 增强配置
```

config-overrides.js
```js
const {
 override,
 addDecoratorsLegacy,
} = require("customize-cra");
module.exports = override(
 addDecoratorsLegacy(),
);
```

jsconfig.json
```json
{
 "compilerOptions": {
     "experimentalDecorators": true
 }
}
```
## redux
1. let store = createStore(reducer)
   1. getState
   2. dispatch
   3. substribe
   4. unsubstribe
2. bindActionCreators 
3. combineReducers 合并


## mobx
1. create-react-app 配置装饰器https://www.jianshu.com/p/103f004aa41c
2. bindActionCreators
3. redux-mobx
4. react-redux
5. redux中间件 
6. 中间件 applyMiddleware 源码 、洋葱模型
7. compose函数 类比koa  compose(a,b)(x)  (x)=>b=>a
8. redux-logger
9. redux-thunk https://zhuanlan.zhihu.com/p/85403048

## 函数式编程

## 编译原理

## GraphQL

## JS
1. JS最新基本数据类型:BigInt https://segmentfault.com/a/1190000019912017?utm_source=tag-newest


## ts
1. strictNullChecks: null严格检查。函数可选参数兼容
2. strictPropertyInitialization： 初始化参数兼容。和strictNullChecks设置为false时该项也变成false了



## webpack
1. require.context('./examples', true, /\.js$/) // 动态读取文件



## 软件开发
1. 软件生命周期
2. 软件开发模型
   1. 普遍模型
   2. 增量开发模型
   3. 原型开发模型
3. 模型  UML （unified Modeling Language）
   1. 简化、多视角、通用符合
   2. http://staruml.io/
   3. 类图
      1. 属性
      2. 方法
      3. 依赖
      4. 泛化、继承=》由具体到宽泛 extend
      5. 接口 interface
      6. 组合关系：汽车和汽车轮子
      7. 聚合关系：汽车队和汽车
   4. 活动图
   5. 时序图
   6. 协作图
   7. 组件图
   8. 部署图
## 设计模式
1. 单例：
   1. 一般单例
   2. 透明单例
   3. 构建和单例分离 
   4. commonjs的模块化就是用的单例
   5. jquery也用到了单例 全局就一个
   6. 全局模态框
   7. reducer store单例
   8. 缓存一定要单例
2.  适配器模式
   9.  axios兼容浏览器和node服务端
   10. 文件读取 的promise化
   11. computed也是适配器函数
   12. 地址码值表的适配
   13. NodeJs ORM sequelize
3. 装饰器模式  注解 aop
   1. 不改变原来的结构和功能 为对象新增
   2. core-decorators
   3. 应用：    
      1. AOP   
      2. 无痕埋点
      3. 高阶组件 
      4. react-redux 
      5. 表单校验
4. 代理模式
   1. 事件委托
   2. 代理服务器：处理图片、静态资源
   3. 虚拟代理 图片懒加载
   4. 缓存代理 空间换时间 阶乘算法优化
   5. 防抖节流
      1. 节流 只有一个定时器，只认第一个结果
      2. 防抖 每次都重制定时器  只认最后一个结果
   6. 反向代理
   7. 反向代理
   8. Proxy函数

5. 观察者模式
   1. Subject 《=》observer
   2. 只有发布者和观察者（两者耦合）
   3. 场景
      1. 事件绑定
      2. Promise
      3. Jquery的 $.callbacks()
      4. events on emit subject
      5. fs.createReadStream on('data') on('end')
      6. http.createServer on('request')  listen(3000)
      7. 生命周期 更新
      8. EventBus
      9. Mvvm中用到了观察者模式。更新页面
      10. reducer
6. 发布订阅模式：中间有个事件中心，
   1. Publisher ==》Event Channel 《==》Subscriber
   2. 中介
7. 外观模式 门面模式   
   1. 子系统
   2. 场景
      1. 计算器
      2. 计算机
      3. 压缩
         1. .gz
         2. .zip
         3. .7z
      4. redux
      5. 函数的重载 
         1. react-createElement
         2. vue-createElement
         3. buffer
         4. createStore
         5. axios node+XML 类似适配器
         6. polyfill jq处理兼容性
8. 迭代器模式
   1. createIterator
   2. forEach
   3. Iterator
      1. Es6中列表类型的列表方法都有 [Symbol.iterator]
   4. yield
      1. 二叉树遍历：前序、中序、后序
## 

## 面向对象
1. 软件开发经历分析、设计和编码三个阶段：
   1. OOA
   2. OOD
   3. OOP
2. 特性
   1. 抽象
   2. 封装
   3. 多态


##  面试
1. 堆、栈：吃了吐是栈，吃了拉是队列
2. 执行上下文对象：
   1. VO:
      1. 变量对象
      2. 
   2. this
   3. scopeChain
3. 基本数据类型和引用数据类型的赋值
4. 执行上下文栈
   1. 全局上下文的 VO，也被称为GO
   2. 浏览器中，全局的VO就是GO
5. 问题
   1. one里为啥没有tow函数
   2. let和var的区别
   3. let声明的变量为什么在window上访问不到
6. 什么是作用域
   1. 一个一个上下文
7. 


## 前端监控
1. 监控的分类
   1. 性能的监控
   2. 数据的监控
   3. 异常的监控
2. 为什么要前端监控
3. 前端性能监控和错误监控
   1. 前端衡量性能的指标 时间监控
      1. Resource timing performace API
   2. 前端资源监控
   3. ajax请求监控
   4. 前端代码异常
   

## 链接
http://www.javascriptpeixun.cn/course/12