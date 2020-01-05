const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/schedule/update_cache.test.js', function () {
  it('update_cache',async ()=>{
    //let app = mock.app();
    //await app.ready();
    assert(typeof app.cache=== 'undefined');
    await app.runSchedule('update_cache');
    console.log('app.cache',app.cache)
    assert(app.cache.title.length >0 );
  });
});

 