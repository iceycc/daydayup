module.exports = (options,app)=>{
   return async function(ctx,next){
       //通过ctx 获取请求头中的用户代码
       //Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36
     let userAgent = ctx.get('user-agent');
     //ua:[/Chrome/]
     let matched = options.ua.some(ua=>ua.test(userAgent));
     if(matched){
        ctx.status = 401;
        ctx.body = '你这种浏览器不让访问!';
     }else{
         await next();
     }
   }
}