import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586684835159_9727';

  // add your egg config in here
  config.middleware = [];

  config.mysql = {
    client:{
      host:'localhost',
      port:3306,
      user:'root',
      password:'zwwl123456',
      database:'rbac'
    },
    app:true, // app应用，将mysql挂载到app上。
    agent:false // ?
  }
  config.security = {
    csrf:false
  }
  // config/default.js
  // config.passportGithub = {
  //   key: 'your_clientID',
  //   secret: 'your_clientSecret',
  //   // callbackURL: '/passport/github/callback',
  //   // proxy: false,
  // };
  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
