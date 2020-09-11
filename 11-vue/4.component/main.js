import Vue from 'vue';
import App from './App'

// 加载全局样式 全局组件 全局指令
// 儿子找到爸爸 让爸爸方法触发
Vue.prototype.$dispatch = function (eventName,value) {
    let parent = this.$parent; // 先找第一层的$parent
    while (parent) {
        parent.$emit(eventName, value); // 触发方法
        parent = parent.$parent; // 接着向上找
    }
}
// 爸爸找到儿子 让儿子对应的方法触发
Vue.prototype.$broadcast = function (eventName,value) {
   let children = this.$children;
    function broad(children) {
        children.forEach(child => { // 如果自己的儿子下面 还有儿子 继续查找
            child.$emit(eventName, value); // 触发当前儿子上的对应事件
            if (child.$children){
                broad(child.$children)
            }
        });
    }
    broad(children); // 先找自己的儿子
}
// 1.入口文件 webpack 会根据这个入口文件进行打包
// 2.默认会渲染App.vue


// 创建一个全局的发布订阅  偶尔用一次还ok
Vue.prototype.$bus = new Vue(); // vm.$on $emit

// 创建一个vue实例
new Vue({
    el:'#app',
    render:h=>h(App) // 用h(createElement)
})



// vue serve

