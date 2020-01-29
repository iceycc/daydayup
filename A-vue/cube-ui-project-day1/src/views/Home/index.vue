<template>
  <div class="home">
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader";
import { createNamespacedHelpers } from "vuex";
import * as types from "@/store/actions-type";

let { mapActions, mapState } = createNamespacedHelpers("home"); // 把vuex中的命名空间全部定好

// import { mapActions } from "vuex";
export default {
  components: {
    HomeHeader
  },
  computed: {
    ...mapState(["categories"]) // 执行后返回的是一个对象
  },
  methods: {
    change(value) {
      // 切换课程
      console.log(value[0]);
    },
    ...mapActions([types.SET_CATEGORIES])
    // ...mapActions("home", ["setCategories"])
  },
  mounted() {
    // this.$store.dispatch("home/setCategories");
    this[types.SET_CATEGORIES]();
  }
};
</script>


<style lang="stylus"></style>


// vuex 1） 可以存到内存中 只要用户不刷新 我就可以去内存中取
// 如果有了 我可以选择不重复调用接口

// 2) 如果多个页面 有共同逻辑 调用共同的action 即可

// vuex 数据变化 会更新视图

// window.xxx = {},重新掉接口 或者 去local里区2

// 权限问题

