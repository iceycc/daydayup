<template>
    <div>
      <HelloWorld msg="Welcome1" />
      <HelloWorld msg="Welcome2" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Father",
  components: {
    HelloWorld,
  },
  beforeCreate() {
    console.log("father-beforeCreate");
  },
  created() {
    console.log("father-created");
  },
  beforeMount() {
    console.log("father-beforeMount");
  },
  mounted() {
    console.log("father-mounted");
  },
  beforeUpdate() {
    console.log("father-beforeUpdate");
  },
  updated() {
    console.log("father-updated");
  },
  beforeDestroy() {
    console.log("father-beforeDestroy");
  },
  destroyed() {
    console.log("father-destroyed");
  },
};
</script>
