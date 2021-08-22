import { Module, Global } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import { RedisUtilsService } from './redis-utils.service';

@Global()
@Module({
  imports: [
    RedisModule.register({
      port: 6379,
      host: process.env.DB_REDIS_HOST,
      password: '',
      db: 0,
    }),
  ],
  providers: [
    RedisUtilsService,
  ],
  exports: [
    RedisUtilsService,
  ],
})
export class RedisUtilsModule {
}
