import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsEntity } from '../entities/posts.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostsEntity)
    private readonly postRepository: Repository<PostsEntity>,
  ) {
  }

  async createPost(data: { [keyName: string]: any }): Promise<PostsEntity> {
    console.log('222', data);
    return this.postRepository.save(data);
  }

  async deletePostById(id):Promise<UpdateResult> {
    return this.postRepository.update(id, { isDel: 1 });
  }

  async postList(): Promise<PostsEntity[]> {
    return this.postRepository.find();
  }
}
