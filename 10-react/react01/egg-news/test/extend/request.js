const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/extend/request.js', function () {
  it('isChrome',async ()=>{
   let userAgent = 'chrome';
   let ctx = app.mockContext({
       headers:{'user-agent':userAgent}
   });
   assert(ctx.request.isChrome ===true);
   let userAgent2 = 'ie';
   let ctx2 = app.mockContext({
       headers:{'user-agent':userAgent2}
   });
   assert(ctx2.request.isChrome ===false);
  });
});

/**
 * context 上下文  英文缩写是如何缩写的
 *  元音去掉
 * ctx
 * ctx
 */
 