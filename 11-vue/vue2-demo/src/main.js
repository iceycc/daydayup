import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false
// debugger
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
// debugger
debugger
new Vue({
  el:'#app',
  render(c){
    return c('div',{
      attrs:{
        id:'app'
      }
    },this.message)
  },
  data: {
    message: 'Hello!'
  },
  created(){
    // console.log(aa)
  }
})
