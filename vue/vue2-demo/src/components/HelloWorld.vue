<template>
    <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name:'Child',
  props: {
    msg: String,
  },
  beforeCreate() {
    console.log("child-beforeCreate",this);
  },
  created() {
    console.log("child-created",this.msg);
  },
  beforeMount() {
    console.log("child-beforeMount",this.msg);
  },
  mounted() {
    console.log("child-mounted",this.msg);
  },
  beforeUpdate() {
    console.log("child-beforeUpdate",this.msg);
  },
  updated() {
    console.log("child-updated",this.msg);
  },
  beforeDestroy() {
    console.log("child-beforeDestroy",this.msg);
  },
  destroyed() {
    console.log("child-destroyed",this.msg);
  },
};
</script>