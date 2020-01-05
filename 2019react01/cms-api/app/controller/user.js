const BaseController = require('./base');
const { sign } = require('jsonwebtoken');
const svgCaptcha = require('svg-captcha');
// pageNum pageSize where
class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'user';
  }
  async captcha() {
    const { ctx } = this;
    const captchaObj = svgCaptcha.create();// captche={text,data}
    ctx.session.captcha = captchaObj.text;// 把文本信息存放到会话中的captcha属性中
    ctx.set('Content-Type', 'image/svg+xml');
    ctx.body = captchaObj.data;
  }
  async checkCaptcha() {
    const { ctx } = this;
    const captcha = ctx.request.body.captcha;
    if (captcha === ctx.session.captcha.text && ctx.session.captcha.expires.getTime() > Date.now()) {
      ctx.body = 'captcha验证成功';
    } else {
      ctx.body = 'captcha验证失败';
    }
  }
  async signin() {
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;// {username,password}
    // select * from user where username=? and password=?
    const result = await app.mysql.select('user', {
      where: { username, password },
      limit: 1,
    });
    if (result && result.length > 0) {
      const user = JSON.parse(JSON.stringify(result[0]));
      delete user.password;
      // 登录成功之后要查询此用户所有拥有有权限树
      const list = await this.app.mysql.query(`SELECT resource.* from 
      role_user 
      INNER JOIN role_resource ON role_user.role_id = role_resource.role_id
      INNER JOIN resource ON role_resource.resource_id = resource.id
      WHERE role_user.user_id = ? order by resource.id ASC `, [ user.id ]);
      const resources = [];
      const map = {};
      list.forEach(resource => {
        resource.children = [];
        map[resource.id] = resource;
      });

      // 父节点一定要子节点的前面
      list.forEach(resource => {
        if (resource.parent_id === 0) {
          resources.push(resource);
        } else {
          map[resource.parent_id] && map[resource.parent_id].children.push(resource);
        }
      });
      user.resources = resources;
      this.success(sign(user, this.config.jwtSecret));
    } else {
      this.error('登录失败');
    }
  }
  async signup() {
    const { ctx, app } = this;
    const { aggrement, prefix, phone, address, repassword, captcha, ...user } = ctx.request.body;// {username,password,email}

    if (!aggrement) {
      return this.error('请同意协议再注册!');
    }
    if (user.password !== repassword) {
      return this.error('密码和确认密码不一致!');
    }
    console.log(captcha, ctx.session.captcha);
    if (!captcha || !ctx.session.captcha || captcha.toLowerCase() !== ctx.session.captcha.toLowerCase()) {
      return this.error('验证码不正确!');
    }
    user.phone = prefix + '-' + phone;
    user.address = address.join('-');
    const result = await app.mysql.insert('user', user);
    if (result.affectedRows > 0) {
      this.success({
        id: result.insertId,
      });
    } else {
      this.error('注册失败');
    }
  }
}
module.exports = Controller;
