import { Controller, Get, Render, Post, Body, Response } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    @Render('login')
    loginPage(){
        return {
            title:"登录"
        }
    }
    @Post()
    login(@Body() body:{username:string,password:string|number},@Response() res:any){
        console.log(body)
        res.redirect('/home?username='+body.username); // 重定向到用户首页
        // 注意如果在控制器函数中使用了@Response()就不能使用return返回值
    }
}
