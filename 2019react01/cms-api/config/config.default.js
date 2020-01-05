/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560333267836_7569';

  // add your middleware config here
  config.middleware = [

  ];
  config.auth = {
    blacklist: [
      '/api/role/getUser',
      '/api/role/setUser',
    ],
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  userConfig.security = {
    csrf: false,
    domainWhiteList: [ 'http://127.0.0.1:8000' ],
  };
  userConfig.cors = {
    credentials:true
  }
  userConfig.jwtSecret = 'zhufeng';
  userConfig.mysql = {
    client: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root',
      database: 'cms',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
