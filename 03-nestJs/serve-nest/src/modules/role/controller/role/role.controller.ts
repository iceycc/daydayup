import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoleService } from '../../services/role/role.service';
import { RoleEntity } from '../../entities/role.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('角色模块')
@Controller('role')
export class RoleController {
  constructor(
    private readonly roleServices: RoleService,
  ) {
  }

  @Post()
  createRole(
    @Body() body: { [keyName: string]: any },
  ): Promise<RoleEntity> {
    return this.roleServices.createRole(body);
  }

  @ApiOperation({summary:'获取角色',description:'获取角色'})
  @Get()
  roleList(
    @Query() query: { [keyName: string]: any },
  ): Promise<RoleEntity[]> {
    return this.roleServices.roleList(query);
  }
}
