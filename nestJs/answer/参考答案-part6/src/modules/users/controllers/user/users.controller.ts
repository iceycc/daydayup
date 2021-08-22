import { Controller, Post, Body, Delete, Param, ParseIntPipe, Patch, Get } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { ObjectType } from 'src/types';
import { UsersEntity } from '../../entities/users.entity';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor (
    private readonly usersService: UsersService,
  ) { }

  @Post()
  async createUser(
    @Body() data: ObjectType
  ): Promise<UsersEntity> {
    return await this.usersService.createUser(data)
  }

  @Delete(':id')
  async deleteUserById(
    @Param('id', new ParseIntPipe()) id: number
  ): Promise<UpdateResult> {
    return await this.usersService.deleteUserById(id);
  }

  @Patch(':id')
  async modifyUserById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: ObjectType
  ): Promise<UpdateResult> {
    return await this.usersService.modifyUserById(id, data);
  }

  @Get()
  async userList(): Promise<UsersEntity[]> {
    return await this.usersService.userList();
  }

  @Get(':id')
  async userById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<UsersEntity> {
    return await this.usersService.userById(id);
  } 
}
