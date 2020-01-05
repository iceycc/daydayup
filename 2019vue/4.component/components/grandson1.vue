<template>
  <div>grandson1 {{mny}}
      <button @click="change">修改钱数</button> <button @click="say">say</button>
  </div>
</template>

<script>
export default {
  props: {
    mny: {}
  },
  methods:{
      say(){
        this.$dispatch('say',300);
      },
      change(){
         //   触发自己身上的事件
        //   this.$emit('change',300)
        this.$dispatch('change',300); // 自动向上查找他的父亲 有change的话 就触发就好了
        // this.$parent.$emit('change',300); // 直接触发父亲绑定的事件  当前父亲是儿子,触发了儿子的change事件
      }
  }
};
</script>