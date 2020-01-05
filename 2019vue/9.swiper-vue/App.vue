<template>
<div class="container" >
 <Swiper v-model="selected" >
        <SwiperItem name="box1">
            <div class="content" style="background:red">内容1</div>
        </SwiperItem>
        <SwiperItem name="box2">
              <div class="content" style="background:yellow">内容2</div>
        </SwiperItem>
        <SwiperItem name="box3">
              <div class="content" style="background:green">内容3</div>
        </SwiperItem>
    </Swiper>
</div>
</template>
<script>
import Swiper from './components/Swiper';
import SwiperItem from './components/SwiperItem';
export default {
    data(){
        return {selected:'box2'}
    },
    components:{
        Swiper,
        SwiperItem
    },
    mounted(){
       
    }
}
</script>
<style lang="stylus">
*{margin:0; padding:0}
.content
    width 100%;
    height 150px;


.container{
    margin 0 10px;
}
</style>