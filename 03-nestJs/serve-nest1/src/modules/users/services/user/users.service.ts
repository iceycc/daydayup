import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository, UpdateResult } from 'typeorm';
import { UsersEntity } from '../../entities/users.entity';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { RoleEntity } from '../../../role/entities/role.entity';
import { PostsEntity } from '../../../posts/entities/posts.entity';
import { CreateUserTdo } from '../../../../dto/create.user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {
  }

  async createUser(data: CreateUserTdo): Promise<UsersEntity> {
    const user = await this.userRepository.create(data); // 密码加密的时候需要先create再save
    return await this.userRepository.save(user);
  }


  async deleteUserById(id: number): Promise<UpdateResult> {
    return this.userRepository.update(id, {
      isDel: 1,
    });
  }

  async modifyUserById(id: number, data: { [keyName: string]: any }): Promise<UpdateResult> {
    return this.userRepository.update(id, data);
  }

  async userList(): Promise<UsersEntity[]> {
    // 简单查询本表数据
    // return this.userRepository.find();
    return await getConnection().createQueryBuilder(UsersEntity, 'user')
      .orderBy({ 'user.createdAt': 'DESC' })
      .leftJoin(UserRoleEntity, 'user_role', 'user.id=user_role.userId')
      .leftJoinAndMapMany('user.role', RoleEntity, 'role', 'user_role.roleId=role.id')
      .leftJoinAndMapMany('user.posts', PostsEntity, 'posts', 'user.id=posts.userId')
      .getMany();
  }

  async userById(id: number): Promise<UsersEntity> {
    return this.userRepository.findOne(id);
  }

}
