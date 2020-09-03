import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import "dotenv/config"
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
  
  // 3. 配置视图
  app.setBaseViewsDir(join(__dirname,'..','views'))

  // 4. 配置模版引擎
  app.setViewEngine('ejs')
  
  // 监控端口,运行项目后浏览器直接访问localhost:3000
  await app.listen(PORT,()=>{
    console.log('启动了: http://127.0.0.1:'+PORT)
  });
}
bootstrap();