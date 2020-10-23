import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository } from 'typeorm';
import { UsersEntity } from '../../entities/users.entity';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { RoleEntity } from '../../../role/entities/role.entity';
import { PostsEntity } from '../../../posts/entities/posts.entity';
import { CreateUserTdo } from '../../dto/create.user.dto';
import NodeAuth from 'node-auth0';
import { ToolsService } from '../../../../services/tools/tools.service';

@Injectable()
export class UsersService {
  private NodeAuth: NodeAuth;

  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private readonly toolsService: ToolsService,
  ) {
    this.NodeAuth = new NodeAuth();
  }

  async createUser(createUserDto: CreateUserTdo): Promise<UsersEntity> {
    const user = await this.userRepository.create(createUserDto); // 密码加密的时候需要先create再save
    return await this.userRepository.save(user);
  }


  async deleteUserById(id: number): Promise<string> {
    const { raw: { affectedRows } } = await this.userRepository.update(id, {
      isDel: 1,
    });
    if (affectedRows) {
      return '删除成功';
    } else {
      return '删除失败';
    }
  }

  async modifyUserById(id: number, data: { [keyName: string]: any }): Promise<string> {
    const { password } = data;
    data.password = this.NodeAuth.makePassword(password);
    const { raw: { affectedRows } } = await this.userRepository.update(id, data);
    if (affectedRows) {
      return '更新成功';
    } else {
      return '更新失败';
    }
  }

  async userList(queryOption): Promise<any> {
    // 简单查询本表数据
    // return this.userRepository.find();

    // 条件分页查询
    const { pageSize = 10, pageNumber = 1, username } = queryOption;
    this.toolsService.checkPage(pageSize, pageNumber);
    const queryConditionList = ['user.isDel = 0']; // 没有被删除的用户
    if (username) {
      queryConditionList.push('user.username LIKE :username');
    }
    const queryCondition = queryConditionList.join(' AND ');

    const [data, total] = await getConnection().createQueryBuilder(UsersEntity, 'user')
      .andWhere(queryCondition, { username: `${username}`})
      .orderBy({ 'user.createdAt': 'DESC' })
      .skip((pageNumber-1) * pageSize)
      .take(pageSize)
      .leftJoin(UserRoleEntity, 'user_role', 'user.id=user_role.userId')
      .leftJoinAndMapMany('user.role', RoleEntity, 'role', 'user_role.roleId=role.id')
      .leftJoinAndMapMany('user.posts', PostsEntity, 'posts', 'user.id=posts.userId')
      .printSql() // 仅仅是打印sql语句,可以不写
      .getManyAndCount();

    return {
      data,
      total,
      pageNumber,
      pageSize
    }
  }

  async userById(id: number): Promise<UsersEntity> {
    return this.userRepository.findOne(id);
  }

}
