import { Controller, Get, Render, Post, Body, Response, Request, Delete } from '@nestjs/common';
// import {Request as Req, Response as Res} from 'express'
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
    login(@Body() body:{username:string,password:string|number},@Response() res:any,@Request() req:any){
        console.log(body)
        const {username} = body
        req.session.userkey = 'hello'
        res.cookie('username',username,{ maxAge:60 * 60 * 1000, httpOnly: true, signed:true})
        res.redirect('/home'); // 重定向到用户首页
        // 注意如果在控制器函数中使用了@Response()就不能使用return返回值
    }
    
    @Delete()
    loginOut(@Request() req:any,@Response() res:any){
        // 删除cookie：1 直接置为空 2 设置cookie maxAge =0
        // req.signedCookies.username = '' 
        req.signedCookies.username.maxAge = 0
        // 删除session
        // req.session.cookie.maxAge =0
        req.session.destoy(err=>{
            
        })
    }
}
