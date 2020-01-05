<template>
  <div>
    <cube-button primary @click="toLogin">登录</cube-button>
  </div>
</template>


<script>
export default {
  methods: {
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
