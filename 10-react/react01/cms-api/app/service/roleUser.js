const BaseService = require('./base');
class Service extends BaseService {
  constructor(...args) {
    super(...args);
    this.entity = 'role_user';
  }
}
module.exports = Service;
