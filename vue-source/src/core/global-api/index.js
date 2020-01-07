/* @flow */

import config from '../config'
import { initUse } from './use'
import { initMixin } from './mixin'
import { initExtend } from './extend'
import { initAssetRegisters } from './assets'
import { set, del } from '../observer/index'
import { ASSET_TYPES } from 'shared/constants'
import builtInComponents from '../components/index'
import { observe } from 'core/observer/index'

import {
  warn,
  extend,
  nextTick,
  mergeOptions,
  defineReactive
} from '../util/index'

/**
 * 定义vue 全局 config
 * @param {} Vue 
 */
export function initGlobalAPI (Vue: GlobalAPI) {
  // config
  const configDef = {}
  configDef.get = () => config
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef)

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    // 外部不建议直接使用 
    warn,
    extend, // 继承
    mergeOptions,
    defineReactive // Object.defineProperty
  }

  Vue.set = set
  Vue.delete = del 
  Vue.nextTick = nextTick // 浏览器事件环

  // 2.6 explicit observable API
  Vue.observable = <T>(obj: T): T => {
    observe(obj)
    return obj
  }

  Vue.options = Object.create(null)
  
  // 注册 ASSET_TYPES   'component', 'directive', 'filter'
  ASSET_TYPES.forEach(type => {
    Vue.options[type + 's'] = Object.create(null)
  })

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue

  extend(Vue.options.components, builtInComponents)

  initUse(Vue) // 初始化 Vue.use , 默认会调用当前插件大install方法。
  initMixin(Vue) // 初始化 Vue.mixin 混合 将传人大属性混合到this.options中
  initExtend(Vue) // 初始化Vue.extend 会创建个子类 继承于父类
  initAssetRegisters(Vue)
}
