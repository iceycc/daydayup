import MessageComponent from './Message.vue';
import Vue from 'vue';

// 单例
let instance;
let getVueInstance = () => {
    // 此instance 是全局的
    instance = new Vue({ // 就一个孩子
        render: h => h(MessageComponent)
    }).$mount();
    // 把生成的结果放到页面
    document.body.appendChild(instance.$el);
}
const Message = {
    success(options) {
        // 点击弹出层 需要将.vue文件挂载到 内存中

        // 就是将这个 new Vue的操作 只做一次
        // 默认如果实例不存在 我就创建一个实例
        !instance && getVueInstance();
        // 将渲染好的内容 放到 页面中
        instance.$children[0].add({
            ...options,
            type:'success'
        });
        // $mount() document.body.appendChild
        // options 就是当前弹出来的框
        // 通过数据来驱动
    },
    info(){

    },
    warn(){}
}

export {
    Message
}

export default {
    // _Vue 是当前的构造函数 ,默认Vue.use 就会使用调用这个方法
    install(){
       // 1） 注册全局组件 2) 注册全局指令 3) 往原型上添加方法 、属性 
       let $message = {}
       Object.keys(Message).forEach(key=>{
            $message[key] = Message[key];
       })
       // 一般使用新对象时 就采用拷贝的方式
       Vue.prototype.$message = $message
    }
}
// vuex vue-router 表格组件 ，单元测试 cli axios

// 讲项目实战

// render 函数
