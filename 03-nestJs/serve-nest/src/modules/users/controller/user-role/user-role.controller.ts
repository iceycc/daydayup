import { Body, Controller, Post } from '@nestjs/common';
import { UserRoleEntity } from '../../entities/user_role.entity';
import { UserRoleService } from '../../services/user-role/user-role.service';

@Controller('user-role')
export class UserRoleController {
  constructor(
    private readonly userRoleServices:UserRoleService
  ) {
  }

  @Post()
  async assignRole(
    @Body() body:{[keyName:string]:any}
  ):Promise<UserRoleEntity>{
    return await this.userRoleServices.assignRole(body);
  }

}
