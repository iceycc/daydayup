import { Controller } from 'egg';

export default class UserController extends Controller {
  public async loginCallback() {
    const { ctx } = this;
    if(ctx.isAuthenticated()){
      ctx.body = {
        status:'ok',
        type:ctx.user.type,
        currentAuthority:ctx.user.currentAuthority
      }
    }else{
      ctx.body = {
        success:false,
        error:'用户登陆失败'
      }
    }
  
  }
}
