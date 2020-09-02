import { Module, Get, Query, Post, Body ,Response, Patch, Delete} from '@nestjs/common';
import { query } from 'express';

@Module({})
export class UserModule {
    @Get()
    getUser(@Query() query:number){
        if(query){
            return [{id:query,name:'wby'}]
        }else{
            return [{id:query,name:'wby'},{id:2,name:'bbbbss'}]
        }
    }
    @Post()
    addUser(@Body() body:any,@Response() res:any){
        console.log(body)
        res.send('添加用户成功')
    }
    @Patch()
    updateUser(@Body() body:any,@Response() res:any){
        console.log(body)
        res.send('更新用户成功')
    }
    @Delete()
    deleteUser(@Body() body:any,@Response() res:any){
        console.log(body)
        res.send('删除用户成功')
    }
}
