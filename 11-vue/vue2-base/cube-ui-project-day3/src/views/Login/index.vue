<template>
  <div class="login wrapper">
    <MHeader>登录</MHeader>
    <div class="login-form">
      <img src="../../assets/images/login_bg1.png" alt />
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group>
          <cube-form-item :field="fields[0]"></cube-form-item>
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">登录</cube-button>
        </cube-form-group>
      </cube-form>
    </div>
  </div>
</template>
<style lang="stylus">
.login {
  &-form {
    width: 80%;
    margin: 0 auto;

    img {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      margin-bottom: 40px;
    }
  }
}
</style>
<script>
import { mapActions } from "vuex";
import MHeader from '@/components/MHeader'
import * as types from "@/store/actions-type";
export default {
  components:{
    MHeader
  },
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      fields: [
        {
          type: "input",
          modelKey: "username",
          label: "用户名 ",
          props: {
            placeholder: "请输入用户名"
          },
          rules: {
            required: true
          }
        },
        {
          type: "input",
          modelKey: "password",
          label: "密码",
          props: {
            placeholder: "请输入密码",
            type: "password"
          },
          rules: {
            required: true
          }
        }
      ]
    };
  },
  methods: {
    ...mapActions([types.LOGIN]),
    submitHandler(e) {
      e.preventDefault();
      try{
        // 登录
        this[types.LOGIN](this.model);
        this.$router.push('/')
      }catch(e){
        console.log(e);
      }
    }
  }
};
</script>
