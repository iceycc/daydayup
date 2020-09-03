import { Controller, Get, Render, Post, Body, Response } from '@nestjs/common';
let posts = [
    {id:1,title:'post1',content:'x1111111'},
    {id:2,title:'post2',content:'x222'},
    {id:3,title:'post3',content:'x1331111'},
    {id:4,title:'post4',content:'4411111'},
    {id:5,title:'post5',content:'555511111'},
]
@Controller('post')
export class PostController {
    @Post()
    addPost(@Body() body:any,@Response() res:any){
        console.log(body)
        posts.push(body)
        return posts
    }    

    @Get()
    @Render('post')
    postPage(){
        return {
            posts:posts
        }
    }

}
