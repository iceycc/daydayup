import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccessEntity } from '../entities/access.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccessService {
  constructor(
    @InjectRepository(AccessEntity)
    private readonly accessRepository: Repository<AccessEntity>,
  ) {
  }

  async createAccess(body: { [keyName: string]: any }): Promise<AccessEntity> {
    return await this.accessRepository.save(body);
  }

  async deleteAccess(id: number): Promise<any> {
    const access = await this.accessRepository.findOne(id);
    return await this.accessRepository.remove(access);
  }

  async modifyAccess(id: number, params: { [keyName: string]: any }): Promise<any> {
    return await this.accessRepository.update(id, params);
  }

  async accessList(query: { [keyName: string]: any }): Promise<any> {
    return await this.accessRepository.find();
  }

  async accessById(id: number): Promise<AccessEntity> {
    return await this.accessRepository.findOne(id);
  }

}
