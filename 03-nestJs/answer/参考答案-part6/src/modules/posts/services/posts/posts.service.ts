import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostsEntity } from '../../entities/posts.entity';
import { Repository } from 'typeorm';
import { ObjectType } from 'src/types';

@Injectable()
export class PostsService {
  constructor (
    @InjectRepository(PostsEntity)
    private readonly postsRepository: Repository<PostsEntity>
  ) { }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 15:44:03
   * @LastEditors: 水痕
   * @Description: 创建帖子
   * @param {type} 
   * @return {type} 
   */
  async createPosts(data: ObjectType): Promise<PostsEntity> {
    const posts = await this.postsRepository.create(data);
    return await this.postsRepository.save(posts);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 15:44:46
   * @LastEditors: 水痕
   * @Description: 根据id删除帖子
   * @param {type} 
   * @return {type} 
   */
  async deletePostsById(id: number): Promise<string> {
    const { raw: { affectedRows } } = await this.postsRepository.delete(id);
    if (affectedRows) {
      return '删除成功'
    } else {
      return '删除失败';
    }
  }

  async modifyPostsById(id: number, data: ObjectType): Promise<string> {
    const { raw: { affectedRows } } = await this.postsRepository.update(id, data);
    if (affectedRows) {
      return '修改成功';
    } else {
      return '修改失败';
    }
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 15:48:19
   * @LastEditors: 水痕
   * @Description: 查询全部的帖子
   * @param {type} 
   * @return {type} 
   */
  async postsList(): Promise<PostsEntity[]> {
    return await this.postsRepository.find();
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 15:48:50
   * @LastEditors: 水痕
   * @Description: 根据id查询帖子
   * @param {type} 
   * @return {type} 
   */
  async postsById(id: number): Promise<PostsEntity> {
    return await this.postsRepository.findOne(id);
  }
}
