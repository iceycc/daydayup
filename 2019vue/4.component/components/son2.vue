<template>
    <div>son2
       <!-- count:{{count}} <button @click="changeCount">更改序号 </button> -->
       <!-- count:{{value}} <button @click="changeCount">更改序号 </button> -->

       <!-- 属性的集合 -->
        <!-- {{$attrs}} -->
        {{$attrs.mny}}
        <!-- v-bind  将属性全部向下传递   v-on 将方法全部进行向下传递-->
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>
    </div>
</template>
<script>
// 如果组件中使用了 props 就会将 attrs 从当前$attrs移除掉
import Grandson2 from './grandson2'
export default {
    
    // 父传递给子元素 -> 儿子 有三个属性用不到 -> 孙子
    inheritAttrs:false,
    // props:{
    //     mny:{},
    //     value:{
    //         type:Number,
    //     },
    //     count:{
    //         type:Number
    //     }
    // },
    components:{
        Grandson2,
    },
    methods:{
        show(){
            alert(1);
        },
        changeCount(){
            // this.$emit('update:count',100)
            this.$emit('input',100)
        }
    }
}
</script>