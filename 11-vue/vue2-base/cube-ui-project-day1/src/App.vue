<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="footer">
      <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @change="changeHandler"></cube-tab-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
          label: "首页",
          value: "/", // value选中的值
          icon: "iconfont icon-xingqiu"
        },
        {
          label: "我的课程",
          value: "/course",
          icon: "iconfont icon-react"
        },
        {
          label: "个人中心",
          value: "/profile",
          icon: "iconfont icon-xiaolian"
        }
      ]
    };
  },
  watch: {
    // 监控路由属性的变化
    $route: {
      handler(to, from) {
        this.selectedLabelDefault = to.path;
      },
      immediate: true
    }
  },
  methods: {
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
      this.$router.push(label);
    }
  }
};
</script>

<style lang="stylus">
html, body, #app {
  width: 100%;
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  overflow: scroll;
}

.footer {
  background: #f2f2f2;
}

.cube-tab {
  i {
    font-size: 22px;
    line-height: 26px;
  }
}
</style>
