const {assert,app} = require('egg-mock/bootstrap');
describe('test/model/user.test.js', function () {
    
    it('get /users',async ()=>{
        //向数据库里插入三条测试数据
       await app.factory.createMany('user',3);
       // 1 2 3 
       let res = await app.httpRequest().get('/users?offset=2&limit=2');
       assert(res.status == 200);
       assert(res.body.length == 1);
       assert(res.body[0].name == 'name_3'); 
       assert(res.body[0].age == 10); 
    });
    
    it('get /users/:id',async ()=>{
        //向数据库里插入三条测试数据
       //await app.factory.createMany('user',3);
       let user = await app.factory.create('user');
       // 1 2 3 
       let res = await app.httpRequest().get(`/users/${user.id}`);
       assert(res.status == 200);
       assert(res.body.name == user.name); 
       assert(res.body.age == 10); 
    });

    it('post /users',async ()=>{
       let user = {name:'zhufeng',age:10,email:'zhufeng@qq.com'};
       let res = await app.httpRequest().post(`/users`).send(user);
       assert(res.status == 200);
       assert(res.body.name == user.name); 
       assert(res.body.age == 10); 

       res = await app.httpRequest().get(`/users/${res.body.id}`);
       assert(res.status == 200);
       assert(res.body.name == user.name); 
       assert(res.body.age == 10); 
    });

    it('delete /users/:id',async ()=>{
        let user = await app.factory.create('user');
        let res = await app.httpRequest().delete(`/users/${user.id}`);
        assert(res.status === 200);    
     });
});
   