<template>
    <div>
        <Level type="1">我很帅</Level>
        <Level type="2">我很帅</Level>
        <Level type="3">我很帅</Level>
        <Level type="4">我很帅</Level>
        <Level type="5">我很帅</Level>
        <Level type="6">我很帅</Level>
        <!-- 用户无法自定义列表中的内容 -->
        <!-- iview => 4.0 view-design scope-slot -->

        <!-- 作用域插槽 -->
        <List :arr="arr">
            <!-- 希望拿到内部每次循环的结果 -->
            <!-- slot-scope="{a,b}" -->
            <template v-slot:title="{a,b}">
                <li># {{a}} {{b}}</li>
            </template>
        </List>
    </div>
</template>

<script>
//  slot-scope 作用域插槽 可以将组件的内容 共享出来 可以复用

// template 不灵活，递归， 功能缺陷 标签组件

// render 函数渲染元素
import Level from './components/LevelFunctional';
import List from './components/List';
export default {
    // render(h){ // 我希望只提供render 函数而不再使用template
    //     return h('h1',{},'你好')
    // },
    methods:{
        render(h,item){ // jsx 语法默认要使用这个h变量
            return <li># {item}</li>
        }
    },
    data(){
        return {arr:[1,2,3]}
    },
    components:{
        Level,
        List
    }
}
</script>


