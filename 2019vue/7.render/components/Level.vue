<template>
  <h1 v-if="type === '1'">
    <slot></slot>
  </h1>
  <h2 v-else-if="type === '2'">
    <slot></slot>
  </h2>
  <h3 v-else-if="type === '3'">
    <slot></slot>
  </h3>
  <h4 v-else-if="type === '4'">
    <slot></slot>
  </h4>
  <h5 v-else-if="type === '5'">
    <slot></slot>
  </h5>
  <h6 v-else-if="type === '6'">
    <slot></slot>
  </h6>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    }
  }
};
</script>