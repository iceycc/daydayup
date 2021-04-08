<template>
  <div>
    <div class="m-header">
    <i class="iconfont iconfont-fanhui">xxx</i>
    <slot></slot>
    </div>
    <div class="empty"></div>
  </div>
</template>


<style lang="stylus">
.m-header {
  position: absolute;
  width: 100%;
  text-align center;
  height: 60px;
  background: #2a2a2a;
  color: #fff;
  line-height: 60px;

  .iconfont-fanhui {
    position: absolute;
    left: 15px;
  }
}
 .empty{
    height:60px;
  }
</style>
