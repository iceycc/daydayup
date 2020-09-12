import { Controller, Post, Body, Delete, Param, Get, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostEntity } from './posts.entity';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService:PostsService
    ){}

    @Post()
    async createPostByUserId(@Body() body:PostEntity){
        return await this.postsService.createPostByUserId(body)
    }

    @Delete(':id')
    async deletePostById(@Param('id') id:number){
        return await this.postsService.delectPostById(id)
    }

    @Get(':id')
    async getPostById(@Param('id') id:number){
        return await this.postsService.getPostById(id)
    }

    @Get()
    async getPosts(@Query('userId') userId:number){
        if(userId){
            return await this.postsService.getPostsByUserId(userId)
        }else{
            return await this.postsService.getPosts()
        }
    }
}
