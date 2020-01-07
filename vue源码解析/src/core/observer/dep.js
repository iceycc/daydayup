/* @flow */

import type Watcher from './watcher'
import { remove } from '../util/index'
import config from '../config'

let uid = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
export default class Dep {
  static target: ?Watcher;
  id: number;
  subs: Array<Watcher>;

  constructor () {
    this.id = uid++
    this.subs = [] // 初始化数组，存放依赖实例队列
  }

  addSub (sub: Watcher) {
    this.subs.push(sub)
  }

  // 删除一个依赖
  removeSub (sub: Watcher) {
    remove(this.subs, sub)
  }

  // 增加一个依赖
  depend () {
    if (Dep.target) { // 
      // 给当前watcher 挂载当前的dep
      Dep.target.addDep(this)
    }
  }

  // 通知依赖更新
  notify () {
    // stabilize the subscriber list first
    const subs = this.subs.slice()
    if (process.env.NODE_ENV !== 'production' && !config.async) {
      // subs aren't sorted in scheduler if not running async
      // we need to sort them now to make sure they fire in correct
      // order
      subs.sort((a, b) => a.id - b.id)
    }

    // 遍历所有依赖 即 watcher 实例
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update()
    }
  }
}

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null
const targetStack = [] // 依赖实例队列

export function pushTarget (target: ?Watcher) {
  targetStack.push(target) // 保存下来
  Dep.target = target // 添加到依赖管理器
}

export function popTarget () {
  targetStack.pop()
  Dep.target = targetStack[targetStack.length - 1]
}
