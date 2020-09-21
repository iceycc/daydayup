import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../users.entity';
import { Repository } from 'typeorm'
import { LoginDto } from './dto/login.dto'
import { UsersService } from '../users.service';


@Controller('login')
export class LoginController {
    constructor(
        private readonly userService: UsersService,
    ) { }

    async login(data: LoginDto) {
        return await this.userService.login(data);
        // 根据用户名去查询数据,然后验证密码
        // const { username, password } = data;
        // const user = await this.userRepository.findOne({ where: { username } });
        // if (user && this.toolsService.checkPassword(password, user.password)) {
        //     return user.toResponseObject(true);
        // } else {
        //     return '账号或密码错误';
        // }
    }
}
