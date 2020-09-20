import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './users.entity';
import { Repository, getManager, EntityManager } from 'typeorm';
import { UsersExtendEntity } from './usersExtend.entity';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>
    ) { }

    async create(data) {
        // console.log(data)
        // return await this.usersRepository.save(data);
        const { username, password, email, mobile, gender, qq, address } = data
        return await getManager().transaction(async (entityManager: EntityManager) => {
            const user: Record<string, any> = await entityManager.save(UsersEntity, {
                username,
                password,
                email
            })
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
}
