import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { UsersModule } from './modules/users/users.module';
import { PostsModule } from './modules/posts/posts.module';
import { RoleModule } from './modules/role/role.module';
// import { AuthGuard } from './guard/auth.guard';
// import { APP_GUARD } from '@nestjs/core';
import { RedisUtilsModule } from './modules/redis-utils/redis-utils.module';

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
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    PostsModule,
    RoleModule,
    RedisUtilsModule],
  controllers: [],
  // providers: [{ // 依赖注入使用守卫
  //   provide: APP_GUARD,
  //   useClass: AuthGuard,
  // }],
})
export class AppModule {
}
