'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const {INTEGER,DATE,STRING} = Sequelize;
    return queryInterface.createTable('users',{
      id:{type:INTEGER,primaryKey:true,autoIncrement:true},
      name:STRING(64),
      age:INTEGER,
      email:STRING(64),
      created_at:DATE,
      updated_at:DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
