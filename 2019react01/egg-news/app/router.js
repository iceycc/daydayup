//app代表我们的整个应用对象koa express app
module.exports = (app)=>{
// controller={}
  const {router,controller} = app;
  router.get('/news',controller.news.index);
  router.resources('users','/users',controller.users);
  router.get('/add',controller.admin.add);
  router.post('/doAdd',controller.admin.doAdd);
}