import { reactive } from 'vue'

// 响应式状态
const state = reactive({
    count: 0
})
console.log(state.count)