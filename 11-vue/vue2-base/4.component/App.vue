<template>
    <div>
        <Parent @say="say"></Parent>
        <!-- <button @click="broadcast">触发所有子组件带有 eat的方法</button> -->
    </div>
</template>

<script>
// 组件使用的三部  声明 + 注册 + 使用
import Parent from './components/parent'
export default {
    provide(){ // 暴露全局方法
        return {vm:this}
    },
    methods:{
        say(){
            console.log('说话')
        },
        broadcast(){
            this.$broadcast('eat')
        }
    },
    components:{
        Parent
    }
}
</script>

<style>

</style>