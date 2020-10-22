import { Module } from '@nestjs/common';
import { RoleController } from './controllers/role/role.controller';
import { RoleService } from './services/role/role.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
    ])
  ],
  controllers: [
    RoleController
  ],
  providers: [
    RoleService
  ]
})
export class RoleModule { }
