const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/extend/context.js', function () {
  it('lan',async ()=>{
   let lan = 'zh-CN';
   let ctx = app.mockContext({
       headers:{'accept-language':lan}
   });
   assert(ctx.lan() == lan);
  });
});
 