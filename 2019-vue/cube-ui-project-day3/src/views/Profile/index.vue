<template>
  <div class="profile">
    {{user.menuList}}
    <div class="profile-banner" v-if="!user.username" >
      <img class="avatar" src="../../assets/images/photo.png" alt />
      <cube-button primary inline @click="toLogin">登录</cube-button>
    </div>

    <div class="profile-banner" v-else>
      <img class="avatar" v-if="!user.url" src="../../assets/images/photo.png" alt @click="upFile"/>
       <img class="avatar" v-else :src="user.url" alt @click="upFile"/>
      <Upload ref="upload" @change="change"/>
      <cube-button primary inline >{{user.username}}</cube-button>
    </div>
    <!-- 底下的两个组件 应该分开 和路由表中的 根据后端的权限 动态的加载当前需要哪些路由 -->
    <ul class="list">
      <router-link tag="li" v-for="menu in user.menuList" :to="menu.path" :key="menu.path">
        {{menu.name}}
      </router-link>
    </ul>
  </div>
</template>
<style lang="stylus">
.profile {
  &-banner {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    align-items: center;
    height: 300px;
    background: url('../../assets/images/user_bg.png');
    background-color: blue;
  }

  .avatar {
    width: 80px;
    margin-bottom: 30px;
    height: 80px;
  }

  .list{
    font-size:30px;
    line-height 30px;
  }
}
</style>

<script>
import {mapState,mapActions} from 'vuex';
import Upload from '@/components/Upload'
import * as types from '@/store/actions-type'
export default {
  components:{
    Upload
  },
  computed:{
    ...mapState(['user'])
  },
  methods: {
    ...mapActions([types.UPLOAD]),
    change(fd){
      this[types.UPLOAD](fd);
    },
    upFile(){
      this.$refs.upload.show();
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>


// 1.文件上传的大小
// 2.压缩
// 3.裁剪

