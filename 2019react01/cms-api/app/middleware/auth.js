const { verify } = require('jsonwebtoken');
function verifyToken(token, secret) {
  return new Promise(function(resolve, reject) {
    verify(token, secret, function(error, payload) {
      if (error) {
        reject(error);
      } else {
        resolve(payload);
      }
    });
  });
}
/**
module.exports = (options, app) => {
  return async function(ctx, next) {
    // 在此处我要进行权限判断
    const blacklist = options.blacklist;
    if (blacklist.includes(ctx.url)) {
      const authorization = ctx.get('xxxx');
      if (authorization) {
        try {
          const user = await verifyToken(authorization, app.config.jwtSecret);
          ctx.session.user = user;
          await next();
        } catch (error) {
          ctx.status = 401;
          ctx.body = 'TOKEN验证失败';
        }
      } else {
        ctx.status = 401;
        ctx.body = '没有TOKEN';
      }

    } else {
      await next();
    }
  };
};
**/


module.exports = (options, app) => {
  return async function(ctx, next) {
    // 肯定要进行token判断
    const authorization = ctx.get('xxxx');
    if (authorization) {
      try {
        const user = await verifyToken(authorization, app.config.jwtSecret);
        ctx.session.user = user;
        await next();
      } catch (error) {
        ctx.status = 401;
        ctx.body = 'TOKEN验证失败';
      }
    } else {
      ctx.status = 401;
      ctx.body = '没有TOKEN';
    }
  };
};
