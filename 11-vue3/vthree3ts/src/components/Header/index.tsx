import  { defineComponent, reactive, onBeforeMount, onBeforeUpdate, ref} from 'vue'
import aixos from 'axios'
import axios from "axios";
interface headerProps{
    title:string
}
export default defineComponent({
    name:'demo',
    props:{
        title:{
            type:String
        }
    },
    setup(props,context){
        console.log(props,context)
        const obj = reactive({ count: 0 })
        const imageSrc = ref('')
        const counter = ref(1)
        onBeforeMount(()=>[
            console.log('onBeforeMount')
        ])
        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate')
        })
        axios.get('https://dog.ceo/api/breeds/image/random').then(res=>{
            console.log(res.data)
            imageSrc.value = res.data.message
            console.log(imageSrc.value)
        })
        return ()=>(
            <>
                <img width="200" src={imageSrc.value} alt=""/>
                <div>{props.title}</div>
                <div>
                    <input type="text" v-model={counter.value}/>
                    <p>{counter.value}</p>
                </div>
                <div>
                    <input type="text" v-model={obj.count}/>
                    <p>{obj.count}</p>
                </div>
            </>
        )
    }
})
