import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEntity } from '../../entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepository:Repository<RoleEntity>
  ) {
  }

  async createRole(body:{[keyName:string]:any}):Promise<RoleEntity>{
    return this.roleRepository.save(body)
  }
}
