// 根路由相关的hook 钩子 全局钩子
import store from '@/store';
import * as types from '@/store/actions-type'
import auth from './auth'
export default {
  // 标识 当前的hook的作用
  cancelToken: (to, from, next) => {
    // 清除token
    store.commit(types.CLEAR_TOKEN); // 清除所有的请求
    next(); // 继续王下走
  },

  // 给每一个hook 对应一个功能
  permission: async (to, from, next) => {
    // 如果用户没有登录 访问了课程页面 应该跳转登录页面

    // 我们1要知道用户是否登录 2） 要知道哪个页面是需要登录的
    let needLogin = to.matched.some(item=>item.meta.needLogin);
    //  可以做一个白名单


    // store.state.hasPermission 是否拉取过权限了

    if(!store.state.hasPermission){ // 如果没有权限
        let flag = await store.dispatch(types.VALIDATE); // 判断当前是否登录过
        if(needLogin){ // 如果需要登录 并且没登录就跳转到登录页面
          if(!flag){
            next('/login'); // 需要登录但是没登录
          }else{
            next();  // 需要登录并且登陆过了
          }
        }else{
          if(to.name === 'login'){
            if(!flag){
              next();
            }else{
              next('/profile')
            }
          }else{
            next(); // 不需要登录
          }
        }
    }else{
      // 有权限
      if(to.name === 'login'){
         next('/');
      }else{
         next(); // 有权限可以访问
      }

    }

    // 在页面切换的时候 需要拿到 当前状态是否登录
  },
  profileAuth:function(to,from,next){
      console.log(to)
    // if(to.name === 'profile'){
      if (store.state.hasPermission && store.state.user.menuList) {
        // [service,contact]
        if(!store.state.menuPermission){
          let list = store.state.user.menuList.map(item => item.auth);
          let newRoutes = auth.filter(item => list.includes(item.name));
          // newRoutes就是我们要新增的路由
          store.commit(types.SET_MENU_LIST); // 先设置
          // hack 保证路由加载完成
          this.addRoutes(newRoutes); // 把需要的路由新增进去 ,是在下一轮才会生效
          next({...to,replace:true}); //hack
        }else{
          next(); // 如果有权限就继续执行
        }
      }else{
          next();
      }
      // 根据当前用户的权限 来去动态的加载路由
      // console.log('个人中心页面 ')
    // }
  }
}
