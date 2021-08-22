import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { EntityManager, getManager, Repository } from 'typeorm';

@Injectable()
export class UserRoleService {
  constructor(
    @InjectRepository(UserRoleEntity)
    private readonly userRoleRepository: Repository<UserRoleEntity>,
  ) {
  }

  async assignRole(data: { [keyName: string]: any }): Promise<any> {
    const { userId, roleList } = data;
    /**
     * 1. 现将表中userId删除
     * 2. 重新插入数据
     * 必须用事务
     */
    return getManager()
      .transaction(async (entityManager: EntityManager) => {
        await entityManager.delete(UserRoleEntity, { userId });
        for (const item of roleList) {
          await entityManager.save(UserRoleEntity, { userId, roleId: +item });
        }
      }).then(() => {
        return '分配角色成功';
      }).catch((e) => {
        Logger.error('分配角色错误', e);
        throw new HttpException('分配角色错误', HttpStatus.OK);
      });

  }
}
