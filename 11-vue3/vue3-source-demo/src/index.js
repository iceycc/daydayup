// import {reactive, effect, computed, ref} from "@vue/reactivity";
import {reactive,effect,computed,ref} from "./reactivity";
// proxy
const state = reactive({
    name: '王冰洋',
    age: 28,
    hobbies: ['eat', 'sleep']
})
// console.log(state.name)
// console.log(state.age)
// console.log(state.hobbies)
effect(() => {
    // console.log('effect--',state.age)
    console.log(JSON.stringify(state.hobbies))
})
// state.age =39
state.hobbies.push(41)
state.hobbies[1] = 0


// watchEffect是基于effect的 批量更新策略  renderEffect
// vue3 兼容vue2
// 写了一个effect effect会执行 =》 activeEffect = effect
// 对数据进行取值操作 get() ; 取name属性， name = [effect]
// 稍后用户修改了name属性 set() ; 取name属性， name=[activeEffect]

// 计算属性 computed
// 计算属性是有缓存的，多次取值只走一次
let myAge = computed(() => { // lazy为true的effect
    console.log('computed---', state.age)
    return state.age * 2
})
effect(() => {
    console.log('e2', state.age)
})
effect(() => {
    console.log('e3', myAge.value) // 计算属性返回值也需要进行依赖收集
})
console.log(myAge.value)
console.log(myAge.value)
state.age = 30
console.log(myAge.value)


