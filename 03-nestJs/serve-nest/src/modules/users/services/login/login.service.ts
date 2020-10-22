import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../entities/users.entity';
import { Repository } from 'typeorm';
import { ToolsService } from './tool.service';
import { jwt } from 'src/utils';
import { RedisUtilsService } from '../../../redis-utils/redis-utils.service';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
    private readonly toolService: ToolsService,
    private readonly redisUtilsService: RedisUtilsService
  ) {
  }

  async login(data: any): Promise<any> {
    const { username, password } = data;
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && this.toolService.checkPassword(password, user.password)) {
      // 登录成功后将该用户的资源存在redis中
      // 1. 生产token
      const token = jwt.createToken(String(user.id));
      const redisData = {
        token,
        user,
      };
      await this.redisUtilsService.set(String(user.id), redisData);
      return { ...user, token };
    } else {
      return '密码错误';
    }

  }
}
