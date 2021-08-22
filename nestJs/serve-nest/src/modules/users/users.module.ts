import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersController } from './controller/user/users.controller';
import { UsersService } from './services/user/users.service';
import { UserRoleService } from './services/user-role/user-role.service';
import { UserRoleController } from './controller/user-role/user-role.controller';
import { UserRoleEntity } from './entities/user_role.entity';
import { LoginController } from './controller/login/login.controller';
import { LoginService } from './services/login/login.service';
import { ToolsService } from '../../services/tools/tools.service';
import { NestLogModule } from 'nest-log-icey';

@Module({
  imports: [
    TypeOrmModule.forFeature([
        UsersEntity,
        UserRoleEntity,
      ],
    ),
    NestLogModule.register('log npm包test')
  ],
  controllers: [UsersController, UserRoleController, LoginController],
  providers: [UsersService, UserRoleService, LoginService, ToolsService],
})
export class UsersModule {
}
