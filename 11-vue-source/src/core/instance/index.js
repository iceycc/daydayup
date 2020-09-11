import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 *  Vue的构造函数
 * @param {*} options 
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    // 必须要new
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 使用vue时就会调用初始化
  this._init(options)
}
// es5方便在原型上挂载方法，es6class不方便

// 原型上挂方法
// 给当前的Vue实例添加属性和方法
// 初始化 vue声明周期流程以及响应式流程启动
initMixin(Vue) // _init  初始化 mixin

// 初始实例属性和方法 $set\$delete\$watch  挂载与实例相关到方法。
stateMixin(Vue) 

// vue实例中事件相关到方法 $on $emit $off 实现vue的发布订阅模式
eventsMixin(Vue) 

// 声明周期相关到方法 $foreUpdate $destroy
lifecycleMixin(Vue) // Vue.prototype._update   $destroy  $forceUpdate  

// 渲染函数 提供_render方法
renderMixin(Vue) // Vue.prototype._render  Vue.prototype.$nextTick

export default Vue
