import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import "dotenv/config"
import * as cookieParser from 'cookie-parser'
import * as expressSession from 'express-session'
import { join } from 'path'
const PORT = process.env.PORT || 8080;
async function bootstrap() {
  // 1. 使用NestFactory工厂创建一个app应用并且传递一个AppModule模块进去,类似我们使用express框架一样的先创建一个app
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  // 2. 配置静态资源 
  // app.useStaticAssets(join(__dirname,'..','public'))
  app.useStaticAssets(join(__dirname,'..','public'),{
    prefix:'/static/'
  })
  app.useStaticAssets(join(__dirname,'..','bootstrap'),{
    prefix:'/bootstrap/'
  })
  app.useStaticAssets(join(__dirname,'..','demo'),{
    prefix:'/demo/'
  })
  
  // 3. 配置视图
  app.setBaseViewsDir(join(__dirname,'..','views'))

  // 4. 配置模版引擎
  app.setViewEngine('ejs')
  
  // 5. cookie
  app.use(cookieParser(process.env.SECRET))

  // 7. session 
  app.use(expressSession({secret:process.env.SECRET,cookie:{maxAge:60 * 1000}}))

  // 监控端口,运行项目后浏览器直接访问localhost:3000
  await app.listen(PORT,()=>{
    console.log('启动了: http://127.0.0.1:'+PORT)
  });
}
bootstrap();