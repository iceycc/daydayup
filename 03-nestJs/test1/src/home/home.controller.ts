import { Controller, Get, Render, Query } from '@nestjs/common';

@Controller('home')
export class HomeController {
    @Get()
    @Render('index')
    index(@Query('username') username:string):Record<string,any>{
        return {
            title:'欢迎来的index页面',
            username
        }
    }
}
