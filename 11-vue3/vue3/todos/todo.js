const TodoList = {
    data(){
        return {
            title:'Todos',
            todos: [
                { text: 'Learn JavaScript', id:1},
                { text: 'Learn Vue', id:2 },
                { text: 'Build something awesome', id:3 }
            ]
        }
    }
}
const app = Vue.createApp(TodoList)
app.component('todo-item',{
    template: `<li>
          {{todo.text}}
          <button>{{left}}</button>
          <button>{{right}}</button>
        </li>`,
    data(){
        return{
            left:'Delete',
            right:'Done'
        }
    },
    props:['todo'],
})
app.component('anchor-heading',{
    render(){
        return Vue.h(
            'h' + this.level,
            {},
            this.$slots.default()
        )
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
})
app.component('blog-post',{
    render(){
        const { h } = Vue
        return h('div',[
            h('header', this.$slots.header()),
            h('main', this.$slots.default()),
            h('footer', this.$slots.footer())
        ])
    }
})
app.mount("#app")