import { Controller, Post, Body, Delete, Param, ParseIntPipe, Patch, Get } from '@nestjs/common';
import { ObjectType } from 'src/types';
import { PostsService } from '../../services/posts/posts.service';
import { PostsEntity } from '../../entities/posts.entity';

@Controller('posts')
export class PostsController {
  constructor (
    private readonly postsService: PostsService,
  ) { }

  @Post()
  async createPosts(
    @Body() data: ObjectType
  ): Promise<PostsEntity> {
    return await this.postsService.createPosts(data)
  }

  @Delete(':id')
  async deletePostsById(
    @Param('id', new ParseIntPipe()) id: number
  ): Promise<string> {
    return await this.postsService.deletePostsById(id);
  }

  @Patch(':id')
  async modifyPostsById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: ObjectType
  ): Promise<string> {
    return await this.postsService.modifyPostsById(id, data);
  }

  @Get()
  async postsList(): Promise<PostsEntity[]> {
    return await this.postsService.postsList();
  }

  @Get(':id')
  async postsById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<PostsEntity> {
    return await this.postsService.postsById(id);
  }
}
