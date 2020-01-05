const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/extend/response.js', function () {
  it('isSuccess should be true ',async ()=>{
    const ctx = app.mockContext();
    ctx.status = 200;
    assert(ctx.response.isSuccess  === true);
  });
  it('isSuccess should be false',async ()=>{
    const ctx = app.mockContext();
    ctx.status = 404;
    assert(ctx.response.isSuccess  === false);
  });
});

/**
 * context 上下文  英文缩写是如何缩写的
 *  元音去掉
 * ctx
 * ctx
 */
 