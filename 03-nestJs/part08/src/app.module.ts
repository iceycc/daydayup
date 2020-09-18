import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { RoleModule } from './modules/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import 'dotenv/config'
import { UserMiddleware } from './middlewares/user.middleware'
import { UsersController } from './modules/users/users.controller'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { UserGuard } from './guard/user.guard'
import { LoggingInterceptor } from './interceptors/logging.interceptor';
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
  }),
    UsersModule,
    PostsModule,
    RoleModule
  ],
  providers: [
    // { // 模块内使用守卫
    //   provide: APP_GUARD,
    //   useClass: UserGuard
    // },
    // { // // 模块内使用拦截器
    //   provide: APP_INTERCEPTOR, 
    //   useClass: LoggingInterceptor
    // }
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes('users');
  }
}
