import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './posts.entity';
import { UsersEntity } from '../users/users.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>,
        @InjectRepository(UsersEntity)
        private readonly userRepository: Repository<UsersEntity>
    ) { }
    async createPostByUserId(data) {
        console.log(data)
        const { userId, title, content } = data
        const user:Record<string,any> = await this.userRepository.findOne(userId)
        return await this.postRepository.save({
            user:user,
            title, content
        })
    }

    async delectPostById(id){
        const post = await this.postRepository.findOne(id)
        return await this.postRepository.remove(post)
    }

    async update(data){
        const { title, content, id} = data
        const post = await this.postRepository.findOne(id)
        post.title = title
        post.content = content
        await this.postRepository.save(post)
    }

    async getPostsByUserId(userId){
        console.log('userId',userId)
        // return await this.postRepository.find({where:{userId:userId}})
        const user:Record<string,any> = await this.userRepository.find({where:{id:userId},relations:['posts']})
        console.log(JSON.stringify(user))
        console.log(user.get('posts'))
        return user
    }

    async getPostById(id){
        return await this.postRepository.find({where:{id}})
    }

    async getPosts(){
        return await this.postRepository.find()
    }
}
