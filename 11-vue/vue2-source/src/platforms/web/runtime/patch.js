/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // 节点操作
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
// 通过函数柯里化，传入平台相关的参数，经过处理返回一个对应平台的path函数
// web下和weex下操作dom的方法是不一样的。
export const patch: Function = createPatchFunction({ nodeOps, modules })
