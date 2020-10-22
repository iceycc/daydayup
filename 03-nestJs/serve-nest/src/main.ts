import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe as VP } from '@nestjs/common';
import { test1MiddleWares } from './middlewares/test1.middleware';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ValidationPipe } from './pipes/validation/validation.pipe';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
// import { AuthGuard } from './guard/auth.guard';
// import { LogMiddleware } from './middlewares/log.middleware';
const PORT = process.env.PORT || 4567;
const PREFIX = process.env.PREFIX || '';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 给请求添加prefix
  app.setGlobalPrefix(PREFIX);
  // 配置文档信息
  const options = new DocumentBuilder()
    .setTitle('nest api 文档')
    .setDescription('nest api 文档')
    .setBasePath(PREFIX)
    .addBearerAuth({ type: 'apiKey', in: 'header', name: 'token' })
    .setVersion('0.0.1')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${PREFIX}/docs`, app, document);
  // 1 中间价
  app.use(test1MiddleWares());// 使用express中间价

  // 2 守卫
  // app.useGlobalGuards(new AuthGuard()) // 全局使用守卫

  // 3 拦截器
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor()); // 返回参数格式
  // 4 管道
  // app.useGlobalPipes(new VP())
  app.useGlobalPipes(new ValidationPipe()); // 参数校验用


  await app.listen(PORT, () => {
    Logger.log(`http://localhost:${PORT}/${PREFIX}`);
  });
}

bootstrap().then(_ => Logger.log('-- bootstrap'));
