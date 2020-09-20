import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersEntity } from './users.entity';
import { LoginController } from './login/login.controller';
import { ToolsService } from '../../service/tool/tool.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      UsersEntity
    ])
  ],
  controllers: [UsersController, LoginController],
  providers: [UsersService,ToolsService]
})
export class UsersModule { }
