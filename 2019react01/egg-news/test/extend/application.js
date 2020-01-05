const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/extend/application.js', function () {
  it('cache',async ()=>{
    console.log('app.cacheUtil',app.cacheUtil)
    app.cacheUtil.set('name','zhufeng');
    assert(app.cacheUtil.get('name')==='zhufeng');
  });
});
 