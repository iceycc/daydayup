const {Controller} = require('egg');
let users = [];
class AdminController extends Controller{
    async add(){
        await this.ctx.render('admin/add',{});
    }
    async doAdd(){
        let {ctx} = this;
        let user = ctx.request.body;
        user.id = users.length>0?users[users.length-1].id+1:1;
        users.push(user);
        ctx.body = user;
    }
}
module.exports = AdminController;