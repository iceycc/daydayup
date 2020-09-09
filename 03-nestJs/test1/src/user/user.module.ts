import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([ // 这步骤是不能少的
      UserEntity,
    ])
  ],
  controllers: [UserController],
  providers: [
    // LoggerService,
    {
      provide: UserService,
      useClass: UserService,
    },
    // {
    //   provide: 'LOGGER',
    //   useClass: LoggerService,
    // },
    {
      provide: 'USER_NAME',
      useFactory: logger => {
        // logger.log('使用工厂方式1');
        return '工厂方式返回 userName';
      },
    //   inject: ['LOGGER'],
    },
    {
      provide: 'IS_DEV',
      useValue: { isDev: true },
    },
  ],
})
export class UserModule {}
