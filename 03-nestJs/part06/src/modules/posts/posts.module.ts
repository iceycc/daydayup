import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostEntity } from './posts.entity';
import { UsersEntity } from '../users/users.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([
      PostEntity,
      UsersEntity
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
