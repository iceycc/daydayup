<template>
  <li>
    <span @click="change">
      <slot name="title" ></slot>
    </span>
    <ul v-if="isShow">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
    data(){
        return {isShow:false}
    },
    methods:{
        change(){
            this.isShow = !this.isShow;
        }
    }
}
</script>