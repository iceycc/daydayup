<template>
  <Header title="你红红火火"/>
  <div>Home</div>
  <p>{{number}}</p>
  <p>{{message}}</p>
  <img width="200" :src="message" alt="">
</template>

<script lang="ts">
import  {defineComponent,ref} from 'vue'
import Header from '../../components/Header'
import axios from 'axios'
interface IRef {
  [keyName:string]:any
}
export default defineComponent ({
  components:{
    Header
  },
  setup(){
    let imageSrc = ref('')
     axios.get('https://dog.ceo/api/breeds/image/random').then((res:IRef)=>{
       console.log(res.data)
       imageSrc.value = res.data.message
     })
    return {
      number:1,
      message:imageSrc
    }
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
