import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { RoleModule } from './modules/role/role.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService, ConfigModule } from 'nestjs-config'
import 'dotenv/config'
import * as path from 'path'
import { UserMiddleware } from './middlewares/user.middleware'
import { UsersController } from './modules/users/users.controller'
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core'
import { UserGuard } from './guard/user.guard'
import { LoggingInterceptor } from './interceptors/logging.interceptor';
@Module({
  imports: [
    // 配置加载配置文件
    ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
      modifyConfigName: name => name.replace('.config', ''),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        type: config.get('database.type'),
        host: config.get('database.host'),
        port: config.get('database.port'),
        username: config.get('database.username'),
        password: config.get('database.password'),
        database: config.get('database.database'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        logging: config.get('database.logging'),
        timezone: '+08:00', // 东八区
      }),
      inject: [ConfigService]
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
  ],

})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UserMiddleware)
      .forRoutes('users');
  }
}
