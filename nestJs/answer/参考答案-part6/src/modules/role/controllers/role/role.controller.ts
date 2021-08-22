import { Controller, Post, Body, Delete, Param, ParseIntPipe, Patch, Get } from '@nestjs/common';
import { ObjectType } from 'src/types';
import { UpdateResult, DeleteResult } from 'typeorm';
import { RoleService } from '../../services/role/role.service';
import { RoleEntity } from '../../entities/role.entity';

@Controller('role')
export class RoleController {
  constructor (
    private readonly roleService: RoleService,
  ) { }

  @Post()
  async createRole(
    @Body() data: ObjectType
  ): Promise<RoleEntity> {
    return await this.roleService.createRole(data)
  }

  @Delete(':id')
  async deleteRoleById(
    @Param('id', new ParseIntPipe()) id: number
  ): Promise<DeleteResult> {
    return await this.roleService.deleteRoleById(id);
  }

  @Patch(':id')
  async modifyRoleById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: ObjectType
  ): Promise<UpdateResult> {
    return await this.roleService.modifyRoleById(id, data);
  }

  @Get()
  async roleList(): Promise<RoleEntity[]> {
    return await this.roleService.roleList();
  }

  @Get(':id')
  async roleById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<RoleEntity> {
    return await this.roleService.roleById(id);
  } 
}
