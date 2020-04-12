import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  
  // 参数1指向的是鉴权的方法
  const localStrategy = app.passport.authenticate('local',{
    successRedirect:'/api/loginCallback',
    failureRedirect:'/api/loginCallback'
  });
  // localStrategy功能先从请求中获取到用户和密码，
  // 鉴权成功后，会把用户对象传递给自己写的callback里
  router.post('/api/login/account',localStrategy)

  router.get('/api/loginCallback', controller.user.loginCallback);
};
