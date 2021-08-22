import { Controller, Post, Body } from '@nestjs/common';
import { UserRoleService } from '../../services/user-role/user-role.service';
import { ObjectType } from 'src/types';

@Controller('user_role')
export class UserRoleController {
  constructor (
    private readonly userRoleService: UserRoleService,
  ) { }

  @Post()
  async assignRole(
    @Body() data: ObjectType
  ): Promise<any> {
    return await this.userRoleService.assignRole(data);
  }
}
