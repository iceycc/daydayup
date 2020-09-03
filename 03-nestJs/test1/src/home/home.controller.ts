import { Controller, Get, Render, Query, Request } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    @Render('index')
    index(@Request() req:any):Record<string,any>{
        const cookies = req.signedCookies || {}
        const username = cookies.username || ''
        console.log(req.session)
        const userkey = req.session!.userkey
        return {
            title:'欢迎home',
            username,
            userkey
        }
    }
}
