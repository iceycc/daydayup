import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerService } from '../logger/logger.service'
@Module({
  controllers: [UserController],
  providers: [
    // LoggerService,
    { 
        provide: UserService,
         useClass: UserService 
    },
    {
        provide:'LOGGER',
        useClass:LoggerService
    }
  ],
})
export class UserModule {}
