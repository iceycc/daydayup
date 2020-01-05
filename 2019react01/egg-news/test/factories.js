const {factory} = require('factory-girl');
//factory可以用来帮我们快速创建测试数据
module.exports = app=>{
    app.factory = factory;
    factory.define('user',app.model.User,{
        name:factory.sequence('User.username',n=>`name_${n}`),
        age:10,
        email:factory.sequence('User.email',n=>`${n}@qq.com`),
    });
}