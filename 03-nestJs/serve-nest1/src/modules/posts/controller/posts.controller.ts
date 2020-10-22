import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { PostsService } from '../services/posts.service';
import { PostsEntity } from '../entities/posts.entity';
import { UpdateResult } from 'typeorm';
import { AuthGuard } from '../../../guard/auth.guard';

@Controller('posts')
@UseGuards(AuthGuard)
export class PostsController {
  constructor(
    private readonly postsServices: PostsService,
  ) {
  }

  @Post()
  createPost(
    @Body() body: { [keyName: string]: any },
  ): Promise<PostsEntity> {
    console.log(body, '-----');
    return this.postsServices.createPost(body);
  }

  @Delete(':id')
  deletePostById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<UpdateResult> {
    return this.postsServices.deletePostById(id);
  }

  @Get()
  postList(): Promise<PostsEntity[]> {
    return this.postsServices.postList();
  }
}
