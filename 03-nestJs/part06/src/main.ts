import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import 'dotenv/config'
import { test1MiddleWares } from './middlewares/test1'
import { LogMiddleware } from './middlewares/log.middleware'
import { checkLoginMiddleWares } from './middlewares/checkLogin'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(test1MiddleWares())
  app.use(checkLoginMiddleWares())
  await app.listen(process.env.PORT, () => {
    Logger.log('启动： http:127.0.0.1:' + process.env.PORT)
  });
}
bootstrap();
