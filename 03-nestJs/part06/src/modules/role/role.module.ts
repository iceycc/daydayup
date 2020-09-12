import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RoleEntity } from './role.entity';
import { UsersEntity } from '../users/users.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([
      RoleEntity,
      UsersEntity
    ])
  ],
  controllers: [RoleController],
  providers: [ RoleService ]
})
export class RoleModule {}
