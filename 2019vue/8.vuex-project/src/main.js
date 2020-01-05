import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // 将store  new Vue.$store ,会在所有的组件中声明一个属性$store
  render: h => h(App)
}).$mount('#app')

