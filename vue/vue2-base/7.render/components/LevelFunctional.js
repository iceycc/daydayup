export default {
    data(){
        return {val:'你好'}
    },
    props:{
        type:{
            type:String
        }
    },
    methods:{
        input(e){
           this.val = e.target.value
        }   
    },
    render(h){ // h=> createElement  vnode 虚拟节点 （对象）
        // createElement('h1', {}, ['hello', 'hello'])

        // render 中的this 指代的是 我们当前组件的实例

        // jsx 和 react中的不太一样  jsx => js + xml html + javascript

        // <> 都是html  如果是js  {}
        let domProps = {
            innerHTML: 'baz'
        }
        return <div>
            {this.val}
            <div type = "text" domPropsInnerHTML={'<span>hello</span>'}></div>
        </div>
        // https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx
        // h('h' + this.type, {}, 
        //     [this.$slots.default,h('span',{
        //         on: {
        //             click(){
        //                 alert(1)
        //             }
        //         },
        //         attrs:{
        //             a:1
        //         }
        //     },'hello world')]
        // ); // vnode 
    }
}