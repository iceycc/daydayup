<template>
    <div>
        <div v-for="layer in layers" :key="layer.id">
            {{layer.message}} {{layer.id}}
        </div>
    </div>
</template>

<script>
export default {
    // 每次用户点击按钮时  都是增加数据 自动 渲染视图上
    data(){
        return {layers:[]}
    },
    mounted(){
        this.id = 0;
    },
    // ref $children
    methods:{ // 我要提供给外界去掉
        add(options){ // 增加一个序号，时间到了 需要根据序号将他移除掉
            let layer = {...options,id:++this.id};
            this.layers.push(layer);

            layer.timer = setTimeout(()=>{
                this.remove(layer);
            },options.duration)
        },
        remove(layer){
            clearTimeout(layer.timer); // 清除定时器 和 移除弹层
            this.layers = this.layers.filter(item=>layer.id !==item.id )
        }
    }
}
</script>