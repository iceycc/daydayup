import { Body, Controller, Post, Get, Delete, Param, ParseIntPipe, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/user/users.service';
import { UsersEntity } from '../../entities/users.entity';
import { UpdateResult } from 'typeorm';
import { CreateUserTdo } from '../../../../dto/create.user.dto';
// import { AuthGuard } from '../../../../guard/auth.guard';

@Controller('users')
// @UseGuards(AuthGuard) // 模块内使用守卫
export class UsersController {
  constructor(
    private readonly usersServices: UsersService,
  ) {
  }

  @Post()
  createUser(
    @Body() data: CreateUserTdo,
  ): Promise<UsersEntity> {
    return this.usersServices.createUser(data);
  }

  @Delete(':id')
  async deleteUserById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<UpdateResult> {
    return await this.usersServices.deleteUserById(id);
  }

  @Patch(':id')
  async modifyUserById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: { [keyName: string]: any },
  ): Promise<UpdateResult> {
    return await this.usersServices.modifyUserById(id, data);
  }

  @Get()
  userList(): Promise<UsersEntity[]> {
    return this.usersServices.userList();
  }

  @Get(':id')
  userById(
    @Param('id',new ParseIntPipe()) id: number,
  ): Promise<UsersEntity> {
    return this.usersServices.userById(id);
  }
}
