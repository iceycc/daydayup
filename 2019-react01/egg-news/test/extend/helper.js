const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/extend/helper.js', function () {
  it('money 中文',async ()=>{
    let ctx = app.mockContext({
      headers:{"accept-language":'zh-cn'}
    });
    let amount = 100;
    assert(ctx.helper.money(amount) === `人民币 ${amount}`);
  });
  it('money 英文',async ()=>{
    //mockContext里面的headers参数是请求头还是响应头？
    let ctx = app.mockContext({
      headers:{"accept-language":'en-us'}
    });
    let amount = 100;
    assert(ctx.helper.money(amount) === `美元 ${amount}`);
  });
});

/**
 * context 上下文  英文缩写是如何缩写的
 *  元音去掉
 * ctx
 * ctx
 */
 