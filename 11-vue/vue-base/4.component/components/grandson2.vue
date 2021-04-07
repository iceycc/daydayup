<template>
    <div>grandson2
        {{$attrs}}
        <button @click="$listeners.click" @mouseup="$listeners.mouseup">点我 </button>
    </div>
</template>

<script>
export default {
    inject:['vm'], // 注入 会像上查找
    mounted(){ 
        this.vm.say();
        this.$nextTick(()=>{
            this.$bus.$emit('change')
        })
     
    }
}
</script>