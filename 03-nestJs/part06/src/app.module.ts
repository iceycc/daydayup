import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { RoleModule } from './modules/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import 'dotenv/config'
import { LogMiddleware } from './middlewares/log.middleware'
import { UsersController } from './modules/users/users.controller'
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
      __dirname + '/**/*.entity{.ts,.js}'
    ]
  }), UsersModule, PostsModule, RoleModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes('users');
  }
}
