import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users.entity';
import { Repository } from 'typeorm'
import { UsersService } from '../users.service';


@Controller('login')
export class LoginController {
    constructor(
        private readonly userService: UsersService,
    ) { }
    
    @Post()
    async login(@Body() body:any) {
        console.log(body)
        // return 'login'
        return await this.userService.login(body);
    }
}
