const {app} = require('egg-mock/bootstrap');
const factories = require('./factories');
before(()=>{
    factories(app);
});
//在每一个单元测试执行完成之后做清理
afterEach(async ()=>{
  await Promise.all([
      app.model.User.destroy({truncate:true,force:true})
  ]);
});