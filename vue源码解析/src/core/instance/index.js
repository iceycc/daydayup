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
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 使用vue时就会调用初始化
  this._init(options)
}

// 给当前的Vue实例添加属性和方法
initMixin(Vue) // 初始化 mixin
stateMixin(Vue) // $get / $set / $watch
eventsMixin(Vue) // $on $emit $off 实现vue的发布订阅模式
lifecycleMixin(Vue) // Vue.prototype._update   $destroy  $forceUpdate  
renderMixin(Vue) // Vue.prototype._render  Vue.prototype.$nextTick

export default Vue
