const { Service } = require('egg');
class BaseService extends Service {
  async list(pageNum, pageSize, where) {
    // 查询当页的数据 特定页的记录数组
    const list = await this.app.mysql.select(this.entity, {
      where,
      order: [[ 'id', 'asc' ], [ 'username', 'asc' ]],
      offset: (pageNum - 1) * pageSize,
      limit: pageSize,
    });
    const total = await this.app.mysql.count(this.entity, where);
    return { list, total };
  }
  async create(entity) {
    const result = await this.app.mysql.insert(this.entity, entity);
    return result.affectedRows > 0;
  }
  async update(entity) {
    // update user set username=?,password=? where id = ?
    const result = await this.app.mysql.update(this.entity, entity);
    return result.affectedRows > 0;
  }
  async destroy(ids) {
    // delete user where id = ?id
    const result = await this.app.mysql.delete(this.entity, { id: ids });
    return result.affectedRows > 0;
  }
}
module.exports = BaseService;
