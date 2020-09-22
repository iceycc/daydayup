import { Controller, Post, Body, Delete, Param, Query, Patch, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service'
import { createDecipher } from 'crypto';
import { UsersEntity } from './users.entity';
import { UserGuard } from 'src/guard/user.guard';
import { AuthGuard } from 'src/guard/auth.guard'
import { CreateUserTdo } from './dto/create.user.dto'

@Controller('users')
@UseGuards(UserGuard)
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) { }

    @Post()
    async create(
        @Body() data: CreateUserTdo
    ){
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
    @UseGuards(AuthGuard)
    async getUsers(){
        try{
            return await this.usersService.getUsers()
        }catch(err){
            return err
        }
    }

    @Get(':id')
    @UseGuards(AuthGuard)
    async getUserById(@Param('id') id:number){
        try{
            return await this.usersService.getUserById(id)
        }catch(err){
            return err
        }
    }
}
