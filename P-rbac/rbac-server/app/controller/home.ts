import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // ctx.body = await 
    let users = await this.app.mysql.select('user')
    ctx.body = {
      success:true,
      data:users
    }
  }
}
