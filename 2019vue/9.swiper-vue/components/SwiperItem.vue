<template>
  <transition>
    <!-- 可以控制div 隐藏显示 -->
    <div class="swiper-item" v-if="isShow" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  computed: {
    isShow() {
      // 根据用户的参数 来控制显示某一个
      return this.selected === this.name;
    }
  },
  data() {
    return { selected: "" ,reverse:''}; // 默认当前用户传递过来的数据
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="stylus">
.v-enter-active,.v-leave-active{
    transition all .5s linear
}
.v-leave-to{
    transform translate(-100%)
}
.v-enter{
    transform translate(100%);
}

.v-leave-to.reverse{
    transform translate(100%)
}
.v-enter.reverse{
    transform translate(-100%);
}
.v-enter-active{
    position absolute;
    width 100%;
    top:0;
    left:0;
}
</style>

