import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  postsList = [
    {
      id: 0,
      title: '帖子一'
    },
    {
      id: 1,
      title: '帖子二'
    }
  ]
  posts(): any {
    return this.postsList;
  }
}
