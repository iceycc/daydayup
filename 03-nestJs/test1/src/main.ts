import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
async function bootstrap() {
  // 使用NestFactory工厂创建一个app应用并且传递一个AppModule模块进去,类似我们使用express框架一样的先创建一个app
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 监控端口,运行项目后浏览器直接访问localhost:3000
  await app.listen(3000,()=>{
    console.log('启动了: http://127.0.0.1:3000')
  });
}
bootstrap();