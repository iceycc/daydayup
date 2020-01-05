import {
  fetchCategory,
  fetchSlides
} from '@/api/home'
import * as types from '../actions-type'
export default {
  namespaced: true, // 命名空间
  state: {
    categories: [], // 分类数据
    currentLesson: -1, // 当前用户选中的课程
    slides: []
  },
  actions: { // 发请求的
    async [types.SET_CATEGORIES]({
      commit
    }) {
      let categories = await fetchCategory();
      commit(types.SET_CATEGORIES, categories); // 将状态提交给mutation
    },
    // 获取轮播图数据
    async [types.SET_SLIDES]({
      commit
    }) {
      try {
        let slides = await fetchSlides();
        commit(types.SET_SLIDES, slides);
      } catch (e) {
        console.log(e);
      }

    }
  },
  mutations: { // 同步状态的
    // 1) 这个是设置分类
    [types.SET_CATEGORIES](state, payload) {
      state.categories = payload; // 更新状态
    },
    [types.SET_CURRENT_LESSON](state, currentLesson) {
      state.currentLesson = currentLesson
    },
    [types.SET_SLIDES](state, slides) {
      state.slides = slides
    }
  }
}
