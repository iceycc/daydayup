import { Controller, Post, Body, Delete, Param, ParseIntPipe, Patch, Get } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
  constructor (
    private readonly userService: UserService,
  ) { }

  @Post()
  addUser(
    @Body() body: { [propsName: string]: any }
  ): string {
    return this.userService.addUser(body);
  }

  @Delete(':id')
  deleteUserById(
    @Param('id', new ParseIntPipe()) id: number
  ): string {
    return this.userService.deleteUserById(id);
  }

  @Patch(':id')
  modifyUserById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() body: { [propsName: string]: any }
  ): string {
    return this.userService.modifyUserById(id, body);
  }

  @Get()
  list(): any[] {
    return this.userService.list();
  }

  @Get(':id')
  userById(
    @Param('id', new ParseIntPipe()) id: number,
  ): { [propsName: string]: any } {
    return this.userService.userById(id);
  }
}