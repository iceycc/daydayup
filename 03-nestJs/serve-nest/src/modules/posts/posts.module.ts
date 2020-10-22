import { Module } from '@nestjs/common';
import { PostsController } from './controller/posts.controller';
import { PostsService } from './services/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './entities/posts.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      PostsEntity
    ])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
