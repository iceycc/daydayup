<template>
  <div class="home">
    <!-- header部分 -->
    <HomeHeader :categories="categories" @change="change"></HomeHeader>
    <!-- 轮播图部分 -->

    <!-- 我们在页面中 dispatch(action) -> ajax -> commit(mutation)->修改状态 -->
    <div class="home-slide">
      <cube-slide :data="slides" />
    </div>
    <!-- 当前滚动区域的包裹 -->
    <div class="home-wrapper">
      <!-- size 每次的个数 offset 距离底部的偏移量 -->
      <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset" ref="list">
        <template slot="item" slot-scope="{ data }">
          <div :id="data.id" class="item">
            <h2>{{data.title}}</h2>
            <img :src="data.pic" />
            <p>{{data.price | addCurrency('￥')}}</p>
          </div>
        </template>
      </cube-recycle-list>
    </div>
  </div>
</template>

<script>
import HomeHeader from "./HomeHeader";
import { createNamespacedHelpers } from "vuex";
import * as types from "@/store/actions-type";
import { fetchLessonList } from "@/api/home";
let { mapActions, mapState, mapMutations } = createNamespacedHelpers("home"); // 把vuex中的命名空间全部定好

// import { mapActions } from "vuex";
export default {
  data() {
    return { size: 5, offset: 50 };
  },
  components: {
    HomeHeader
  },
  computed: {
    ...mapState(["categories", "slides"]) // 执行后返回的是一个对象
  },
  created() {
    // 页面一创建 可以定义一些公共数据 这些属性不需要动态的监控
    this.offsetIndex = 0;
    this.hasMore = true;
  },
  methods: {
    // 抓取列表数据
    async onFetch() {
      // 获取接口数据
      if (this.hasMore) {
        // 如果有更多数据 就去获取数据
        let { result, hasMore } = await fetchLessonList(
          this.size,
          this.offsetIndex
        );
        this.hasMore = hasMore; // 当前是否还有
        this.offsetIndex = this.offsetIndex + result.length; // 找到对应的偏移量
        return result; // 每次返还的数据
      } else {
        return false; // 停止滚动
      }
    },
    // 切换课程
    change(value) {
      this[types.SET_CURRENT_LESSON](value[0]); // 将我们的选中的结果通过mutation 传入到vuex中
      this.hasMore = true; // 重置获取数据
      this.offsetIndex = 0;
      this.$refs.list.reset();
    },
    ...mapMutations([types.SET_CURRENT_LESSON]),
    ...mapActions([types.SET_CATEGORIES, types.SET_SLIDES])
    // ...mapActions("home", ["setCategories"])
  },
  activated(){ // 激活
    let position = sessionStorage.getItem('position') || 0;
    this.$refs.list.$el.scrollTop = position;
  },
  deactivated(){ // 失活

  },
  mounted() {
    // this.$store.dispatch("home/setCategories");
    // 1)默认加载分类  和 轮播图数据
    this[types.SET_CATEGORIES](); // 没有依赖关系的
    this[types.SET_SLIDES]();
    // 防抖 定时器 节流 时差
    let timer
    this.$refs.list.$el.addEventListener('scroll',(e)=>{
      if(timer){
        clearTimeout(timer);
      }
      // 做防抖操作 存储滚动条位置
      timer = setTimeout(() => {
        sessionStorage.setItem('position',e.target.scrollTop);
      }, 50);
    })

  }
};
</script>


<style lang="stylus" >
img {
  width: 100%;
  max-width: 100%;
}

.home {
  &-slide {
    width: 100%;
    height: 150px;
  }

  &-wrapper {
    height: calc(100vh - 300px);
    width: 80%;
    margin: 10px auto 0;

    .item {
      display: flex;
      border: 1px solid #ccc;
      border-radius: 10px;
      flex-direction: column;
      justify-content: center;
      height: 250px;
      margin-bottom: 10px;

      img {
        width: 100%;
      }

      h2, p {
        text-align: center;
        line-height: 30px;
      }
    }
  }
}
</style>


// vuex 1） 可以存到内存中 只要用户不刷新 我就可以去内存中取
// 如果有了 我可以选择不重复调用接口

// 2) 如果多个页面 有共同逻辑 调用共同的action 即可

// vuex 数据变化 会更新视图

// window.xxx = {},重新掉接口 或者 去local里区2

// 权限问题

