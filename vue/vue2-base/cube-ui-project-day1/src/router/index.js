import Vue from 'vue';
import Router from 'vue-router';
// @ 就是以当前src 为根路径
import Home from '@/views/Home/index.vue';
import loadable from '@/utils/loadable'
Vue.use(Router); // mixin 声明了两个全局组件router-link router-view

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/course',
      name: 'course', // import()
      // 匹配到路径后才会加载这个组件

      // 异步组件，这个组件是异步加载的
      // 在进来之前先默认显示一个loading，等组件加载完毕之后 把loading取消掉

      // 高阶函数
      component: loadable(() => import('@/views/Course/index.vue'))
    },
    {
      path: '/profile',
      name: 'profile', // import()
      // 匹配到路径后才会加载这个组件
      component: loadable(() => import('@/views/Profile/index.vue'))
    }
  ],
});
