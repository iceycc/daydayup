import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../entities/users.entity';
import { Repository, UpdateResult, getConnection } from 'typeorm';
import { ObjectType } from 'src/types';
import { RoleEntity } from 'src/modules/role/entities/role.entity';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { PostsEntity } from 'src/modules/posts/entities/posts.entity';

@Injectable()
export class UsersService {
  constructor (
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) { }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:27:28
   * @LastEditors: 水痕
   * @Description: 添加数据
   * @param {type} 
   * @return {type} 
   */
  async createUser(data: ObjectType): Promise<UsersEntity> {
    const user = await this.usersRepository.create(data);
    return await this.usersRepository.save(user);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:29:29
   * @LastEditors: 水痕
   * @Description: 根据id删除数据
   * @param {type} 
   * @return {type} 
   */
  async deleteUserById(id: number): Promise<UpdateResult> {
    return await this.usersRepository.update(id, { isDel: 1 })
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:31:54
   * @LastEditors: 水痕
   * @Description: 根据id修改数据
   * @param {type} 
   * @return {type} 
   */
  async modifyUserById(id: number, data: ObjectType): Promise<UpdateResult> {
    return await this.usersRepository.update(id, data);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:33:13
   * @LastEditors: 水痕
   * @Description: 查询全部的用户数据
   * @param {type} 
   * @return {type} 
   */
  async userList(): Promise<any> {
    // 简单查询本表数据
    // return await this.usersRepository.find();
    return await getConnection().createQueryBuilder(UsersEntity, 'user')
      .orderBy({ 'user.createdAt': 'DESC' }) // 排序字段
      .leftJoin(UserRoleEntity, 'user_role', 'user.id=user_role.userId') // 中间表
      .leftJoinAndMapMany('user.role', RoleEntity, 'role', 'user_role.role_id=role.id') // 左连接查询角色
      .leftJoinAndMapMany('user.posts', PostsEntity, 'posts', 'user.id = posts.user_id') //左查询帖子
      .printSql()
      .getMany();
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:34:36
   * @LastEditors: 水痕
   * @Description: 根据用户id查询数据
   * @param {type} 
   * @return {type} 
   */
  async userById(id: number): Promise<UsersEntity> {
    return await this.usersRepository.findOne(id);
  }
}
