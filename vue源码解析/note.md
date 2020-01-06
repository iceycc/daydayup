### 1. package.json 
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
   1. Vue.prototype.__patch__  ：比对dom 重新渲染 
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