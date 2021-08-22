import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mysql:{
    enable:true,
    package:'egg-mysql'
  },
  passport:{
    enable:true,
    package:'egg-passport'
  },
  passportLocal:{
    enable:true,
    package:'egg-passport-local'
  }
};

export default plugin;
