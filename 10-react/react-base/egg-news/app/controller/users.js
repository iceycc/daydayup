const {Controller} = require('egg');
function toInt(str){
    if(typeof str == 'number'){
        return str;
    }
    if(!str)return 0;
    return parseInt(str,10)||0;
}
class UsersController extends Controller{
    async index(){
        const {ctx} = this;
        let {offset,limit} = ctx.query;
        let query = {offset:toInt(offset),limit:toInt(limit)}
        ctx.body = await ctx.model.User.findAll(query);
    }
    async show(){
        const {ctx} = this;
        ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
    }
    //接收客户端发过来的参数，然后保存到数据库中
    async create(){
        let {ctx} = this;//ctx就是我们的上下文对象
        const {name,age,email} = ctx.request.body;//从请求体中解构出来name age
        let user = await ctx.model.User.create({name,age,email});
        //insert into users(name,age,creatAt,updateAt) values(name,age,Date.now(),Date.now());
        ctx.status = 200;
        ctx.body = user;
    }
    async update(){
        let {ctx} = this;
        let id = toInt(ctx.params.id);
        let user = await ctx.model.User.findByPk(id);
        if(!user){
            ctx.status = 404;
            return;
        }
        let {name,age,email} = ctx.request.body;
        await user.update({name,age,email});
        ctx.body = user;
    }
    async destroy(){
         let {ctx} = this;
        let id = toInt(ctx.params.id);
        let user = await ctx.model.User.findByPk(id);
        if(!user){
            ctx.status = 404;
            return;
        }
        await user.destroy();
        ctx.status = 200;
    }
}
module.exports = UsersController;