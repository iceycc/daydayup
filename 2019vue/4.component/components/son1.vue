<template>
    <div>
        son1 {{mny}}
        <button @click="changeMoney()">修改钱</button>  <button @click="say">say</button>
        <!-- 给grandson 绑定事件 -->
        <!-- <Grandson1 :mny="mny" @change="change"></Grandson1> -->

        <Grandson1 :mny="mny" @eat="eat"></Grandson1>

        
    </div>
</template>

<script>
// 单向数据流
import Grandson1 from './grandson1'
export default {
    components:{
        Grandson1
    },
    props:{
        mny: {
            type:Number // 校验类型
        }
    },
    methods:{
        eat(){
            console.log('eat')
        },
        say(){
            this.$dispatch('say'); // bus
        },
        change(newValue){
            this.$emit('change',newValue)
        },
        changeMoney(){
           this.$emit('change',200)
        }
    }
}
</script>