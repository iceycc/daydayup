import { Body, Controller, Post } from '@nestjs/common';
import { RoleService } from '../../services/role/role.service';
import { RoleEntity } from '../../entities/role.entity';

@Controller('role')
export class RoleController {
  constructor(
    private readonly roleServices:RoleService
  ) {
  }

  @Post()
  createRole(
    @Body() body:{[keyName:string]:any}
  ):Promise<RoleEntity>{
    return this.roleServices.createRole(body)
  }
}
