import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(RoleEntity)
        private readonly roleRepository: Repository<RoleEntity>,
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }
    async createRoleByUserId(data) {
        console.log(data)
        const { userId, rolename } = data
        if(userId){
            const user:Record<string,any> = await this.userRepository.findOne(userId)
            return await this.roleRepository.save({
                user:[user],
                rolename
            })
        }else{
            return await this.roleRepository.save({
                rolename
            })
        }
       
    }

    async delectRoleById(id){
        const role = await this.roleRepository.findOne(id)
        return await this.roleRepository.remove(role)
    }

    async update(data){
        const {  rolename, id} = data
        const role = await this.roleRepository.findOne(id)
        role.rolename = rolename
        await this.roleRepository.save(role)
    }

    async getRolesByUserId(userId){
        console.log('userId',userId)
        return await this.roleRepository.find({where:{userId:userId}})
        // const user:Record<string,any> = await this.userRepository.find({where:{id:userId},relations:['roles']})
        // console.log(user)
        // return user.roles || []
    }

    async getRoleById(id){
        return await this.roleRepository.find({where:{id}})
    }

    async getRoles(){
        return await this.roleRepository.find()
    }
}
