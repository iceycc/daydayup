import {
  Body,
  Controller,
  Post,
  Get,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
  // UseGuards,
  HttpCode,
  HttpStatus, Query,
} from '@nestjs/common';
// import { UpdateResult } from 'typeorm';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { NestLogService } from 'nest-log-icey';
import { UsersService } from '../../services/user/users.service';
import { UsersEntity } from '../../entities/users.entity';
import { CreateUserTdo } from '../../dto/create.user.dto';

// import { AuthGuard } from '../../../../guard/auth.guard';

@ApiTags('用户模块')
@Controller('users')
// @UseGuards(AuthGuard) // 模块内使用守卫
export class UsersController {
  constructor(
    private readonly usersServices: UsersService,
    private readonly nestLogService: NestLogService,
  ) {
    this.nestLogService = nestLogService;
  }

  @ApiOperation({ summary: '创建用户', description: '请输入用户名和密码' }) // // swagger文档上的文字说明
  @ApiCreatedResponse({
    type: CreateUserTdo,
    description: '创建用户DTO',
  })
  @Post()
  @HttpCode(HttpStatus.CREATED) // 定义返回的http状态码
  createUser(
    @Body() data: CreateUserTdo,
  ): Promise<UsersEntity> {
    return this.usersServices.createUser(data);
  }

  @ApiOperation({ summary: '删除（禁用)用户', description: '根据用户id操作' })
  @Delete(':id')
  async deleteUserById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<string> {
    return await this.usersServices.deleteUserById(id);
  }

  @ApiOperation({ summary: '更新用户信息', description: '根据id更新用户信息' })
  @Patch(':id')
  async modifyUserById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() data: { [keyName: string]: any },
  ): Promise<string> {
    return await this.usersServices.modifyUserById(id, data);
  }

  @ApiOperation({
    summary: '查询全部数据',
    description: '带分页以及条件的查询数据',
    externalDocs: {
      url: 'xxx?username=y&pageNumber=1',
      description: '支持用户模糊查询',
    },
  })
  @Get()
  userList(
    @Query() queryOption: { [keyName: string]: any },
  ): Promise<any> {
    this.nestLogService.log('获取用户信息');
    return this.usersServices.userList(queryOption);
  }

  @Get(':id')
  userById(
    @Param('id', new ParseIntPipe()) id: number,
  ): Promise<UsersEntity> {
    return this.usersServices.userById(id);
  }
}
