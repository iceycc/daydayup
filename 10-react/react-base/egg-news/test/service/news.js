const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/service/news.test.js', function () {
  it('test list',async ()=>{
      const ctx = app.mockContext();
      let response = await ctx.service.news.list(1,5);
      assert(response.length  === 3);
  });
});
 