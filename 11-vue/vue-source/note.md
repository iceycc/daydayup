- b站视频推荐： av71050529
- 对应文档：https://ustbhuangyi.github.io/vue-analysis/v2/prepare/

## 原型方法和静态方法


## 安装flow
npm install -g flow-bin

## 1. package.json 
1. 入口：`module:dist/vue.runtime.esm.js` es6模块 modules是入口 
2. buildjs 打包脚本:`node scripts/build.js`
### 2. node scripts/build.js
1. 打包工具 rollup
2. => config.js 配置文件
3. => entry: resolve('web/entry-runtime.js'),  web是别名
4. => src/platforms/web 找到打包的入口文件了
### 3. 当前打包的入口文件：src/platforms/web

### 4. src
- compiler 编译相关的
- core 核心
- platform 平台
- server 服务端
- sfc 解析.vue文件
- shared 共享文件

### 5. 入口 src/platforms/web/
1. entry-runtime-with-compiler.js   aop函数劫持  $mount
2. runtime/index.js
   1. Vue.prototype.__patch__  ：dom-diff原理 比对dom 重新渲染 
   2. Vue.prototype.$mount => /src/core/instance/lifecycle.js

### 6. 核心 src/core/
1. src/core/index.js
   1. initGlobalAPI(Vue) 初始化全局函数
2. src/core/global-api/index.js
   ```js
    Vue.util = {
      warn,
      extend, //  继承
      mergeOptions,
      defineReactive // Object.defineProperty
    }
    Vue.set = set
    Vue.delete = del
    Vue.nextTick = nextTick

    initUse(Vue) // Vue.use
    initMixin(Vue) // Vue.mixin() // 合并
    initExtend(Vue) // 
    initAssetRegisters(Vue)
   ```
   => core/util/index.js  =>  /core/observer/index
### 7. 真正的Vue实例： /src/core/instance/index.js

1. 初始化 this._init(options) Vue实例一创建就会执行
2. 初始化Vue实例上的属性和方法
   - initMixin(Vue)
      - vm._self = vm
      - initLifecycle(vm)
      - initEvents(vm)
      - initRender(vm)
      - callHook(vm, 'beforeCreate')
      - initInjections(vm) // resolve injections before data/props
      - initState(vm)
      - initProvide(vm) // resolve provide after data/props
      - callHook(vm, 'created')
      -  vm.$mount(vm.$options.el) // 挂载元素
   - stateMixin(Vue)
     - Vue.prototype.$set
     - Vue.prototype.$get
     - Vue.prototype.$watch
   - eventsMixin(Vue)
     - $on $emit $off 实现vue的发布订阅模式
   - lifecycleMixin(Vue)
     - Vue.prototype._update   $destroy  $forceUpdate  
   - renderMixin(Vue)
     - Vue.prototype._render  Vue.prototype.$nextTick


### /src/core/instance/lifecycle.js
- mountComponent挂载组件

## initState 
vue源码解析/src/core/instance/state.js
- initProps(vm, opts.props) // 初始化属性
- initMethods(vm, opts.methods) // 初始化方法
- initData(vm)  // 初始化数据
- initComputed(vm, opts.computed) // 初始化计算属性
- initWatch(vm, opts.watch) // 初始化watch



## Observer
- Observer类将一个可观测的 object
- 给每一个value新增一个_ob_属性，值为value1的Observer实例。这个操作相当于为 value 打上标记，表示它已经被转化成响应式来，避免重复操作。
- 判断数据类型，只有 object 类型的数据才会调用 walk
- walk将每一个属性转换成 getter/setter 的形式来侦查变化，
- defineReactive函数会将对象上的属性 getter/setter化
- 在defineReactive中传人的如果是 object ，new Observer进行递归，保证所有属性值都会被观测

## 依赖收集
1. 什么是依赖收集
  创建一个数组 谁依赖了这个数据就放到数组中，当数据更新时，只需要通知数组中当视图更新就行
2. 什么时候收集依赖，什么时候通知依赖更新？
   在getter中收集依赖，在setter中通知依赖更新。
3. 把依赖收集到哪里
   依赖管理器 Dep类 `/src/core/observer/dep.js`
## 创建一个依赖 
谁用到了数据，谁就是依赖，我们就为谁创建一个Watcher实例。
