const {app,mock,assert} = require('egg-mock/bootstrap');

describe('test/controller/admin.test.js', function () {
  it('test /doAdd',async ()=>{
    let user = {username:'lisi'};
    app.mockCsrf();
    let response = await app.httpRequest().post('/doAdd').send(user).expect(200);
    assert(response.body.id === 1);
    response = await app.httpRequest().post('/doAdd').send(user).expect(200);
    assert(response.body.id === 2);
  });
});
 