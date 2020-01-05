import Vue from 'vue'
import './cube-ui'; // 组件库
import App from './App.vue';
import router from './router';
import store from './store';
import 'amfe-flexible' // 实现pm2rem

Vue.config.productionTip = false;

new Vue({
  router, // 给每个人都增加两个属性this.$route属性 / this.$router方法
  store, // this.$store
  render: h => h(App),
}).$mount('#app');
