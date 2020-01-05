import Vue from 'vue';
import Vuex from 'vuex';
import {
  Toast
} from 'cube-ui'
import home from './modules/home'
import * as types from './actions-type'
import {
  login
} from '@/api/user'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home
  },
  state: {
    user: {}, // 存放用户信息的
    ajaxToken: [] // 准备一个容器 放所有请求的
  },
  mutations: {
    // 发布订阅
    [types.PUSH_TOKEN](state, cancel) {
      // 也可以使用push
      state.ajaxToken = [...state.ajaxToken, cancel]
    },
    [types.CLEAR_TOKEN](state) {
      // 依次调用取消请求的方法
      state.ajaxToken.forEach(cancel => cancel());
      state.ajaxToken = []; // 清空数组
    },
    [types.SET_USER](state, payload) {
      state.user = payload

    }
  },
  actions: {
    async [types.LOGIN]({
      commit
    }, user) {
      debugger
      try {
        let result = await login(user);
        commit(types.SET_USER, result);
        /// 将token存储到localStorage中
        localStorage.setItem('token', result.token); // 存储token
      } catch (e) {
        console.log(e);
        Toast.$create({
          txt: '用户无法登录',
          time: 2000
        }).show(); // 显示错误提示
      }

    }
  }
});
