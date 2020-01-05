import Vue from 'vue'
import Vuex from './vuex'

Vue.use(Vuex) // 1.使用这个插件install方法 
// vue data() computed()

const persits = (store) =>{
  store.subscribe((mutation,state)=>{
    localStorage.setItem('vuex-state',JSON.stringify(state))
  });
}
export default new Vuex.Store({ // 导出的是一个store 的实例
  plugins:[
    persits,
  ],
  modules:{
    a:{
      state:{a:1},
      modules:{
        c:{
          getters:{ // 所有的getters 都会定义到根上
            computedC(state){ // 这个getters 会被定义到根上
              return state.c + 100;
            }
          },  
          state:{c:1},
          mutations:{
            syncAdd(state,payload){ // $store.commit()
              console.log('add');
            }
          }
        }
      }
    },
    b:{
      state:{b:1}
    }
  },
  state: { // 统一的状态管理
    age:10,
    a:100
  },
  getters:{
    // 计算属性
    myAge(state){ // object.defineProperty
      return state.age + 18;
    }
  },
  mutations: { // 可以更改状态
    syncAdd(state,payload){ // $store.commit()
      state.age += payload;
    },
    syncMinus(state,payload){
      state.age -= payload

    }
  },
  actions: { // 异步提交更改
    asyncMinus({commit},payload){ // action 异步获取完后 提交到mutation中
      setTimeout(()=>{
        commit('syncMinus',payload);
      },1000)
    }
  }
})
