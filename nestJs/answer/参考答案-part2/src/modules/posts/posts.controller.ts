import { Controller, Get, Render, Delete, ParseIntPipe,Param } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor (
    private readonly postService: PostsService,
  ) { }

  @Delete('id')
  deleteById(
    @Param('id', new ParseIntPipe()) id: number,
  ):string {
    console.log('当前删除的id', id);
    return '成功';
  }

  @Get()
  @Render('posts')
  posts(): any {
    const postData = this.postService.posts()
    return { list: postData };
  }
}
