<template>
  <div
    class="swiper"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @touchstart="touchstart"
    @touchmove="touchmove"
    @touchend="touchend"
  >
    <div class="viewport">
      <slot></slot>
    </div>
    <!-- 点 dots -->
    <div class="dots">
      <span
        v-for="(item,index) in len"
        :key="index"
        :class="{active: active === index}"
        @click="select(index)"
      >{{item}}</span>
    </div>
    <div class="btn-list">
      <button @click="select(active-1)">左边</button>
      <button @click="select(active+1)">右边</button>
    </div>
  </div>
</template>

<script>
export default { // compositionApi
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return { currentSelcted: "", len: 0 };
  },
  methods: {
    touchstart(e) {
      this.mouseenter(); // 停止滚动
      this.startX = e.touches[0].clientX;
    },
    touchmove() {
      console.log("移动");
    },
    touchend(e) {
       let endX =  e.changedTouches[0].clientX;
       let distance = endX - this.startX;

       // 更严格的判断
       if(distance < 0){
           this.select(this.active+1)
       }else{
           this.select(this.active- 1)
       }
       this.run(); // 当位置变化后 还需要继续开启定时器
    },
    select(newIndex) {
      //可以控制切换功能
      // 点击dots 时 会触发对应的更新事件

      this.prevPosition = this.active; // 当选择时

      if (newIndex === this.names.length) newIndex = 0; // 做左右点击
      if (newIndex === -1) newIndex = this.names.length - 1;
      this.$emit("input", this.names[newIndex]); // 改变后发射即可
    },
    mouseenter() {
      clearInterval(this.timer);
      this.timer = null;
    },
    mouseleave() {
      // 如果有timer  表示已经在跑了 就不管了
      if (!this.timer) {
        this.run();
      }
    },
    showChild() {
      // 切换显示组件
      // 需要获取当前从谁开始 从哪个name属性开始
      this.currentSelcted = this.value || this.$children[0].name;
      // 1) 让对应的儿子显示 其他人隐藏
      this.$children.forEach(vm => {
        this.$nextTick(() => {
          // 我们需要更改完毕 是正向的还是反向的 再去更新视图
          vm.selected = this.currentSelcted; // 跟子组件说那个需要加载
        });

        // 要跟儿子说 你是正着走还是反着走
        //                      1        2
        let reverse = this.prevPosition > this.active ? true : false;
        // 和 子节点说 是正的还是反的
        vm.reverse = reverse;

        // 考虑临街值的问题
        if (this.timer) {
          // 无缝的时候
          if (this.prevPosition === 0 && this.active === this.len - 1) {
            vm.reverse = true;
          }
          if (this.prevPosition === this.len - 1 && this.active === 0) {
            vm.reverse = false;
          }
        }
      });
    },
    run() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          // 把索引往后调整 box1 box2 之后把调整的结果 发送给面
          // 确定当前是第几个
          let index = this.active;
          let newIndex = index - 1;
          this.select(newIndex);
        }, 3000);
      }
    }
  },
  computed: {
    active() {
      // active 表示当前是第几个的索引
      return this.names.indexOf(this.currentSelcted);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {
    value() {
      this.showChild();
    }
  },
  // render
  mounted() {
    // 1) 只执行一次
    this.names = this.$children.map(child => child.name);
    this.len = this.names.length; // 获取儿子节点的个数
    this.showChild(); // 1) 显示默认的节点
    // 2） 自动轮播
    this.run();
    // 3) 控制动画的方向
    // 先记录当前的值
    this.prevPosition = this.active; // 记录刚进来的值
  }
};
</script>

<style lang="stylus">
.swiper {
  margin: 0 auto;
  border: 10px solid purple;
}

.viewport {
  position: relative;
  overflow: hidden;
  height: 150px;
}

.dots {
  display: flex;
  justify-content: center;

  span {
    cursor: pointer;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    border: 1px solid red;
    margin: 0 10px;
  }
}

.active {
  background: red;
  color: #fff;
}
</style>