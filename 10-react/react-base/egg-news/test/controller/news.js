const {app,mock,assert} = require('egg-mock/bootstrap');
/* describe('test/controller/news.test.js', function () {
    it('should get a context',()=>{
        const ctx = app.mockContext({
            session:{user:{name:'zhufeng'}}
        });
        // ctx = {session:{user:{name:'zhufeng'}}}
        assert(ctx.method== 'GET');
        assert(ctx.url == '/');
        assert(ctx.session.user.name === 'zhufeng');
    });
}); */
//演示如何进行异步测试
/**
describe('test/controller/news.test.js', function () {
    //返回一个promise
    it('promise',()=>{
        //superTest ajax
        return app.httpRequest().get('/news').expect(200);
    });
    //使用回调
    it('callback',(done)=>{
        //superTest ajax
        app.httpRequest().get('/news').expect(200,done);
    });
    // async+await
    it('async+await',async ()=>{
        //superTest ajax
        await app.httpRequest().get('/news').expect(200);
    });
});
 */