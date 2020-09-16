import { Controller, Post, Body, Delete, Param, Get, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';

@Controller('role')
export class RoleController {
    constructor(
        private readonly roleService:RoleService
    ){}

    @Post()
    async createRoleByUserId(@Body() body:RoleEntity){
        return await this.roleService.createRoleByUserId(body)
    }

    @Delete(':id')
    async deleteRoleById(@Param('id') id:number){
        return await this.roleService.delectRoleById(id)
    }

    @Get(':id')
    async getRoleById(@Param('id') id:number){
        return await this.roleService.getRoleById(id)
    }

    @Get()
    async getRole(@Query('userId') userId:number){
        if(userId){
            return await this.roleService.getRolesByUserId(userId)
        }else{
            return await this.roleService.getRoles()
        }
    }
}
