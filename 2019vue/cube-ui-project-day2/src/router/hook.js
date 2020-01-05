// 根路由相关的hook 钩子 全局钩子
import store from '@/store';
import * as types from '@/store/actions-type'

export default {
  // 标识 当前的hook的作用
  cancelToken: (to, from, next) => {
    // 清除token
    store.commit(types.CLEAR_TOKEN); // 清除所有的请求
    next(); // 继续王下走
  },

  // 给每一个hook 对应一个功能
  permission: (to, from, next) => {
    next(); // 继续王下走
  }
}
