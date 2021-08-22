// app.ts
import { Application, IBoot } from 'egg';
import { Strategy } from 'passport-local'
export default class FooBoot implements IBoot {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }
  configDidLoad() {
    // Config, plugin files have loaded.
    let { app } = this;
    // 配置鉴权的方式，配置鉴权
    app.passport.use(new Strategy({
      usernameField: 'userName', // 从请求体哪个字段取到用户名
      passReqToCallback: true, // 向callback中传递request对象
    }, async (request, userName, password, done) => {
      // SELECGT * FROM user WHERE username=? AND password=? limit 1
      let user = await app.mysql.get('user', { userName, password });
      if (user) {
        done(null, user);
      } else {
        // 如何登陆失败清楚之前的登陆状态
        request.ctx.logout()
        done(null, false)
      }
    }))
  }
}