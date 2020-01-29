import Vue from 'vue'
import './cube-ui'; // 组件库
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible' // 实现pm2rem

import filters from '@/utils/filters'

// 定义全局过滤器
for (let key in filters) {
  Vue.filter(key, filters[key]);
}


Vue.config.productionTip = false;

new Vue({
  router, // 给每个人都增加两个属性this.$route属性 / this.$router方法
  store, // this.$store
  render: h => h(App),
}).$mount('#app');
