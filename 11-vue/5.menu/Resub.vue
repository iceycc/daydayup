<template>
  <zf-submenu >
      <!-- 标题 -->
      <template slot="title">{{data.name}}</template>
      <!-- 内容 -->
      <template v-for="menu in data.children">
          <!-- 3） 递归当前自己 -->
          <a-sub :data="menu" :key="menu.id" v-if="menu.children"></a-sub>
          <zf-menu-item v-else :key="menu.id">{{menu.name}}</zf-menu-item>
      </template>
  </zf-submenu>
</template>
<script>
// 递归组件
export default {
  name:'a-sub', // 递归组件 需要给当前要递归的组件 提供一个name属性，并且可以在当前组件内，通过name来调用自己 
  props: {
    data: {
      type: Object,
      default: () =>({})
    }
  },
  components: {
  }
};
</script>




