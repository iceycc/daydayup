import { Controller, Get, Render, Post, Body, Response, Delete } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {

    }

    @Post()
    async addPost(@Body() body: any, @Response() res: any) {
        if (!body.title) {
            return this.postPage()
        }
        await this.postService.addPost(body)
        res.redirect('/post'); // 重定向到用户首页
    }

    @Get()
    @Render('post')
    async postPage() {
        const posts = await this.postService.getPostList()
        return {
            title: '文章2',
            posts
        }
    }

    @Delete()
    async delPost(@Body('id') id: any) {
        if(id){
            const posts = await this.postService.delPost(id)
        }
        return this.postPage()
    }

}
