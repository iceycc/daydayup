import { Controller, Post, Body, Delete, Param, Query, Patch, Get } from '@nestjs/common';
import { UsersService } from './users.service'
import { createDecipher } from 'crypto';
import { UsersEntity } from './users.entity';
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    async create(
        @Body() data: Extract<any,any>
    ) {
        return await this.usersService.create(data)
    }

    @Delete()
    async deleteById(@Body('id') id:number){
        try{
           return await this.usersService.deleteById(id)
        }catch(err){
            return err
        }
    }

    @Patch()
    async update(@Body() body:Extract<any,any>){
        try{
            return await this.usersService.update(body)
        }catch(err){
            return err
        }
    }

    @Get()
    async getUsers(){
        try{
            return await this.usersService.getUsers()
        }catch(err){
            return err
        }
    }

    @Get(':id')
    async getUserById(@Param('id') id:number){
        try{
            return await this.usersService.getUserById(id)
        }catch(err){
            return err
        }
    }
}
