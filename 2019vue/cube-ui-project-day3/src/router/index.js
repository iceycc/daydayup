import Vue from 'vue';
import Router from 'vue-router';
// @ 就是以当前src 为根路径
import Home from '@/views/Home/index.vue';
import loadable from '@/utils/loadable';
import hooks from './hook'; //获取路由全部的钩子
Vue.use(Router); // mixin 声明了两个全局组件router-link router-view

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        idx: 0,
        keepAlive:true, // 需要缓存
      }
    },
    {
      path: '/course',
      name: 'course', // import()
      // 匹配到路径后才会加载这个组件

      // 异步组件，这个组件是异步加载的
      // 在进来之前先默认显示一个loading，等组件加载完毕之后 把loading取消掉

      // 高阶函数
      component: () => import('@/views/Course/index.vue'),
      meta: {
        idx: 1,
        keepAlive: true,
        needLogin:true // 当前这个页面必须登录过才能访问
      },
      // children:[
      //   {
      //     path:'a',
      //     name:'a',
      //     component:{
      //       render(h){
      //         return <h1>abc</h1>
      //       }
      //     }
      //   }
      // ]
    },
    {
      path: '/profile',
      name: 'profile', // import()
      // 匹配到路径后才会加载这个组件
      component: loadable(() => import('@/views/Profile/index.vue')),
      meta: {
        idx: 2,
        keepAlive: true,
      }
    }, {
      path: '/login',
      name: 'login', // import()
      // 匹配到路径后才会加载这个组件
      component: loadable(() => import('@/views/Login/index.vue')),
    },

    {
      path: '*',
      component: {
        render(h) {
          return <h1> 找不到 </h1>
        }
      }
    }
  ],
});
Object.values(hooks).forEach(hook => {
  /// 路由切换之前
  router.beforeEach(hook.bind(router))
});


export default router
