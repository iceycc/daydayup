<template>
    <div>
        <div style="border:1px solid red">
            父亲有 {{mny}}
            <!-- 我需要给儿子绑定一个自定义事件 -->
            <!-- son1.$on('change',change) -->
            <Son1 :mny="mny" @change="change1"></Son1>
        </div>
       
        <!-- <Son2 :count="count" @update:count="newValue=>count = newValue"></Son2> -->
        <!-- 1.这个写法是上面的替代品 默认组件内部需要触发 update:count 规定写法  -->
        <!-- <Son2 :count.sync="count"></Son2> -->
        
        <!-- <Son2 :value="count" @input="newValue=>count = newValue"></Son2> -->
        <!-- 2.这个写法是上面的替代品 默认组件内部需要触发 input 规定写法 -->
        <!-- <Son2 v-model="count"></Son2> -->
        <!-- v-model 局限只能传递一个属性 如果只有一个 可以使用 v-model， 多个依然需要使用.sync -->


        <!-- click  input  自定义事件 名字和原生事件相同-->
        <!-- .native 就是给组件的 最外层元素上绑定事件 -->
        <Son2 ref="son2" :mny="mny" :count="count" @click="show" @mouseup="show"></Son2>
    </div>
</template>

<script>
import Son1 from './son1';
import Son2 from './son2';
export default {
    mounted(){
        this.$refs.son2.show(); //直接在父组件中拿到组件的实例  并且ref 不要重名，只有v-for 才会导致出现数组的情况


        this.$bus.$on('change',function () {
            console.log('bangding')
        });

        
    },
    components:{
        Son1,
        Son2
    },
    methods:{
        show(){
            console.log('show')
        },
        changeCount(newValue){
            this.count = newValue
        },
        change1(newValue){
            this.mny = newValue
        }
    },  
    data(){
        return {
            mny:100,
            count:1
        }
    }
}
</script>

