import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { Repository, getManager, EntityManager } from 'typeorm';
import { ObjectType } from 'src/types';

@Injectable()
export class UserRoleService {
  constructor (
    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepository: Repository<UserRoleEntity>
  ) { }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:48:12
   * @LastEditors: 水痕
   * @Description: 给用户分配角色 {userId: 1, roleList: []}
   * @param {type} 
   * @return {type} 
   */
  async assignRole(data: ObjectType): Promise<any> {
    const { userId, roleList } = data;
    /**
     * 1.先将表中userId的删除
     * 2.重新插入数据
     * 这个地方必须加上事务
     */
    return getManager()
      .transaction(async (entityManager: EntityManager) => {
        await entityManager.delete(UserRoleEntity, { userId: Number(userId) });
        // throw new Error('用户分配角色错误')
        for (const item of roleList) {
          await entityManager.save(UserRoleEntity, { userId, roleId: Number(item) });
        }
      }).then(async () => {
        return '分配角色成功';
      }).catch((e) => {
        Logger.error('用户分配角色错误', e);
        throw new HttpException('用户分配角色错误', HttpStatus.OK);
      });
  }
}
