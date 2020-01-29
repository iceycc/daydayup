import axios from '@/utils/ajaxRequest'
import store from '@/store'
// 抓取分类
export const fetchCategory = () => {
  return axios.request({
    url: '/category'
  })
}

// 抓取轮播图
export const fetchSlides = () => {
  return axios.request({
    url: '/slides'
  })
}

// 获取列表对应的数据
export const fetchLessonList = (size, offset) => {
  return axios.request({
    // 如果store中的课程变化了 发送接口的时候 会自动更新对应的数据
    url: `/lessonList/${store.state.home.currentLesson}?size=${size}&offset=${offset}`
  })
}
