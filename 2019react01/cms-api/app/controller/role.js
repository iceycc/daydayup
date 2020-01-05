const BaseController = require('./base');
class Controller extends BaseController {
  constructor(...args) {
    super(...args);
    this.entity = 'role';
  }
  async getResource() {
    const { service } = this;
    const result = await service.role.getResource();
    this.success(result);
  }
  async setResource() {
    const { ctx, service } = this;
    const body = ctx.request.body;// {roleId:1,resourceIds:[1,2,3]}
    await service.role.setResource(body);
    this.success('授权成功');
  }
  async getUser() {
    const { service } = this;
    const result = await service.role.getUser();
    this.success(result);
  }
  async setUser() {
    const { ctx, service } = this;
    const body = ctx.request.body;// {roleId:1,resourceIds:[1,2,3]}
    await service.role.setUser(body);
    this.success('授权成功');
  }
}
module.exports = Controller;
