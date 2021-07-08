import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'

Vue.config.productionTip = false
// debugger
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
debugger
new Vue({
  el:'#app',
  router,
  render(h){
    // return h('div',{
    //   attrs:{
    //     id:'app'
    //   }
    // },this.message)
    return h(App)
  },
  data: {
    message: 'Hello!'
  },
  created(){
    // console.log(aa)
  }
})
