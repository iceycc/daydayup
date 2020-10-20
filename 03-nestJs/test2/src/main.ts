import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import 'dotenv/config';
import { test1MiddleWares } from './middlewares/test1.express.middleware';
import { LogMiddleware } from './middlewares/log.middleware';
import { checkLoginMiddleWares } from './middlewares/checkLogin.express.middleware';
// import { AuthGuard } from './guard/auth.guard';
// import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { ValidationPipe } from './pipes/validation/valitation.pipe';
import { HttpExceptionFilter } from './filters/http-exceotion.filter';
// import bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 1 使用全局中间件
  app.use(test1MiddleWares());
  // app.use(checkLoginMiddleWares())
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded());
  app.use(new LogMiddleware().use);
  // 2 全局守卫
  // app.useGlobalGuards(new AuthGuard())
  // 3 使用全局拦截器
  // app.useGlobalInterceptors(new LoggingInterceptor())
  app.useGlobalInterceptors(new TransformInterceptor());

  // 4 使用全局管道
  app.useGlobalPipes(new ValidationPipe());
  // 5 使用全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 监听端口，启动服务
  await app.listen(process.env.PORT, () => {
    Logger.log('启动： http:127.0.0.1:' + process.env.PORT);
  });
}
bootstrap().then(r => console.log('r', r));
