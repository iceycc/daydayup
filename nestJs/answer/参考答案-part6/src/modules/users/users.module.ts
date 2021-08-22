import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './entities/users.entity';
import { UserRoleEntity } from './entities/user_role.entity';
import { UsersController } from './controllers/user/users.controller';
import { UsersService } from './services/users/users.service';
import { UserRoleController } from './controllers/user-role/user-role.controller';
import { UserRoleService } from './services/user-role/user-role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity,
      UserRoleEntity
    ])
  ],
  controllers: [UsersController, UserRoleController],
  providers: [UsersService, UserRoleService]
})
export class UsersModule { }
