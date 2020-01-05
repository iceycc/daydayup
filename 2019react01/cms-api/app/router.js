'use strict';

module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth(app.config.auth, app);
  router.post('/api/signup', controller.user.signup);// 注册上
  router.post('/api/signin', controller.user.signin);// 登录进去
  router.get('/', controller.home.index);
  router.get('/api/captcha', controller.user.captcha);
  router.post('/api/checkCaptcha', controller.user.checkCaptcha);
  router.resources('user', '/api/user', controller.user);
  router.resources('role', '/api/role', controller.role);
  router.resources('roleUser', '/api/roleUser', controller.roleUser);
  router.resources('roleResource', '/api/roleResource', controller.roleResource);
  router.resources('resource', '/api/resource', controller.resource);

  router.get('/api/role/getResource', controller.role.getResource);// 获取所有的资源
  router.post('/api/role/setResource', controller.role.setResource);// 设置角色和资源的关系
  // 这两个接口需要登录后才能访问
  router.get('/api/role/getUser', controller.role.getUser);// 获取所有的用户
  router.post('/api/role/setUser', controller.role.setUser);// 设置角色和用户的关系

};
/**
 * 1. 方法我可以设置黑白名单
 */
