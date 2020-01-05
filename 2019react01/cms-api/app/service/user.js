const BaseService = require('./base');
class Service extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'user';
  }
  async list(pageNum, pageSize, where) {
    // 查询当页的数据 特定页的记录数组
    const list = await this.app.mysql.select(this.entity, {
      where,
      order: [[ 'id', 'asc' ], [ 'username', 'asc' ]],
      offset: (pageNum - 1) * pageSize,
      limit: pageSize,
    });
    for (let i = 0; i < list.length; i++) {
      const user = list[i];
      // user.resources = ?
      const resources = await this.app.mysql.query(`select resource.* from resource 
      inner join role_resource on resource.id = role_resource.resource_id
      inner join role_user on role_resource.role_id = role_user.role_id
      where role_user.user_id = ?`, [ user.id ]);
      const rootMenus = [];
      const map = {};
      resources.forEach(resource => {
        resource.children = [];
        map[resource.id] = resource;// 把资源的ID和资源的对象关系存放到了map中
        if (resource.parent_id === 0) {
          rootMenus.push(resource);
        } else {
          map[resource.parent_id].children.push(resource);
        }
      });
      user.resources = rootMenus;
    }
    const total = await this.app.mysql.count(this.entity, where);
    return { list, total };
  }
}
module.exports = Service;
