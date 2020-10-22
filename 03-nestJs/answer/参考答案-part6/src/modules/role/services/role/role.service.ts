import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from '../../entities/role.entity';
import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { ObjectType } from 'src/types';

@Injectable()
export class RoleService {
  constructor (
    @InjectRepository(RoleEntity)
    private roleRepository: Repository<RoleEntity>
  ) { }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:39:41
   * @LastEditors: 水痕
   * @Description: 创建角色
   * @param {type} 
   * @return {type} 
   */
  async createRole(data: ObjectType): Promise<RoleEntity> {
    const role = await this.roleRepository.create(data);
    return await this.roleRepository.save(role);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:41:01
   * @LastEditors: 水痕
   * @Description: 根据id删除数据
   * @param {type} 
   * @return {type} 
   */
  async deleteRoleById(id: number): Promise<DeleteResult> {
    return await this.roleRepository.delete(id);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:41:10
   * @LastEditors: 水痕
   * @Description: 根据id修改数据
   * @param {type} 
   * @return {type} 
   */
  async modifyRoleById(id: number, data: ObjectType): Promise<UpdateResult> {
    return await this.roleRepository.update(id, data);
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:41:42
   * @LastEditors: 水痕
   * @Description: 查询全部的角色数据
   * @param {type} 
   * @return {type} 
   */
  async roleList(): Promise<RoleEntity[]> {
    return await this.roleRepository.find();
  }

  /**
   * @Author: 水痕
   * @Date: 2020-09-12 13:42:16
   * @LastEditors: 水痕
   * @Description: 根据角色id查询角色
   * @param {type} 
   * @return {type} 
   */
  async roleById(id: number): Promise<RoleEntity> {
    return await this.roleRepository.findOne(id);
  }
}
