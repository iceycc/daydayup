// import {reactive,effect,computed,ref} from "@vue/reactivity";
import {reactive,effect,computed,ref} from "./reactivity";
// proxy
const state = reactive({
    name:'王冰洋',
    age:28,
    hobbies:['eat','sleep']
})
// console.log(state.name)
// console.log(state.age)
// console.log(state.hobbies)
setTimeout(()=>{
    // state.name = '王冰洋2'
    // state.age = 29
    state.hobbies.push('play') // 调用数组的push方法时，会先差人值，最后更新数组的长度
    state.hobbies[1] = 'sleep1'
})
//
effect(()=>{
    // console.log(state.name)
    // console.log(state.age)
})
setTimeout(()=>{
    // console.log('---------------500------------')
    // console.log(state.name)
    // console.log(state.age)
    // console.log(state.hobbies)
    // console.log('---------------500------------')
},500)
// watchEffect是基于effect的 批量更新策略
// vue3 兼容vue2
