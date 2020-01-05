<template>
  <ul>
    <template v-for="a in arr">
      <slot name="title" :a="a" b="1">
        <!-- 如果没有传递内容 才生效  -->
        <li :key="a">{{a}}</li>
      </slot>
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
