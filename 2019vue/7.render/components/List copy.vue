<template>
  <ul>
    <template v-for="a in arr">
      <xxx 
       v-if="render" 
      :render="render" 
      :item="a" 
      :key="a"></xxx>
      <li v-else :key="a">{{a}}</li>
    </template>
  </ul>
</template>

<script>
// 函数组件
import xxx from "./xxx";
export default {
  props: ["arr", "render"],
  components: {
    xxx
  }
};
</script>