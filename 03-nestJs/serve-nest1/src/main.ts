import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe as VP } from '@nestjs/common';
import { test1MiddleWares } from './middlewares/test1.middleware';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ValidationPipe } from './pipes/validation/validation.pipe';
import { TransformInterceptor } from './interceptors/transform.interceptor';
// import { AuthGuard } from './guard/auth.guard';
// import { LogMiddleware } from './middlewares/log.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 1 中间价
  app.use(test1MiddleWares());// 使用express中间价

  // 2 守卫
  // app.useGlobalGuards(new AuthGuard()) // 全局使用守卫

  // 3 拦截器
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor()) // 返回参数格式
  // 4 管道
  // app.useGlobalPipes(new VP())
  app.useGlobalPipes(new ValidationPipe()); // 参数校验用



  await app.listen(4567, () => {
    Logger.log('http://localhost:4567');
  });
}

bootstrap().then(_ => Logger.log('-- bootstrap'));
