import { Controller, Get, Query, Post, Body ,Response, Patch, Delete, Param, Inject} from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from '../logger/logger.service'
@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        @Inject('LOGGER') readonly loggerServer:LoggerService
        ){
       
    }
    @Get()
    getUserAll(){
        return this.userService.getUser()
    }
    
    @Get(':id')
    getUser(@Param('id') id:number){
        this.loggerServer.log('id '+id)
        if(id){
            return [{id:id,name:'wby'}]
        }else{
            return [{id:id,name:'wby'},{id:2,name:'bbbbss'}]
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
