import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository, getManager, EntityManager } from 'typeorm';
import { UsersExtendEntity } from './usersExtend.entity';
import { LoginDto } from './login/dto/login.dto';
import { ToolsService } from '../../service/tool/tool.service';
// import * as jwt from 'jsonwebtoken'
import { jwt } from '../../utils/jwt'
import { RedisUtilsService } from '../redis-utils/redis-utils.service';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>,
        private readonly toolsService: ToolsService,
        private readonly redisUtilsService:RedisUtilsService
    ) { }

    async create(data) {
        // console.log(data)
        // return await this.usersRepository.save(data);
        const { username, password, email, mobile, gender, qq, address } = data
        return await getManager().transaction(async (entityManager: EntityManager) => {
            const user: Record<string, any> = await this.userRepository.create({
                username,
                password,
                email
            });
            await entityManager.save(UsersEntity, user)
            // throw Error('主动异常')
            console.log('userid', user.id)
            const userExtend = await entityManager.save(UsersExtendEntity, {
                // userId: +user.id,
                user: user,
                mobile,
                gender: +gender,
                qq,
                address
            })
            return userExtend
        })
            .then(res => {
                return res
            })
            .catch(err => {
                console.log('failed')
                throw new HttpException('获取数据错误', HttpStatus.OK);
                // return err
            })
    }

    async deleteById(id): Promise<UsersEntity> {
        const user = await this.usersRepository.findOne(id)
        return await this.usersRepository.remove(user)
    }

    async update(data): Promise<UsersEntity> {
        const { password, username, id } = data
        const user = await this.usersRepository.findOne(id)
        user.password = password
        user.username = username
        return this.usersRepository.save(user)
    }

    async getUsers() {
        return await this.usersRepository.find({ relations: ['userDetail', 'posts', 'roles'] })
    }

    async getUserById(id) {
        return await this.usersRepository.findOne(id, { relations: ['userDetail', 'posts', 'roles'] })
    }

    async login(data: LoginDto): Promise<any | string> {
        // 根据用户名去查询数据,然后验证密码
        const { username, password } = data;
        const user = await this.userRepository.findOne({ where: { username } });
        if (user && this.toolsService.checkPassword(password, user.password)) {
            // 登录成功生成token、获取该用户的资源存到redis中
            // 1.生成token
            const token = jwt.createToken(String(user.id));
            // 2.token存到到redis中
            const redisData = {
                token,
                user,
            }
            this.redisUtilsService.set(String(user.id), redisData);
            return { ...user, token };
        } else {
            return '账号或密码错误';
        }
    }
}
