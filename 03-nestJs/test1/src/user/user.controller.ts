import { Controller, Headers,Get, Query, Post, Body ,Response, Patch, Delete, Param, Inject} from '@nestjs/common';
import { UserService } from './user.service';
import { LoggerService } from '../logger/logger.service'
@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
        // @Inject('LOGGER') readonly loggerServer:LoggerService,
        private readonly loggerServer:LoggerService,
        @Inject('USER_NAME') readonly userName:string,
        @Inject('IS_DEV') readonly isDev:{isDev:boolean}
        ){
       
    }
    @Get()
    getUserAll(name:string):string{
        if(this.isDev){
            console.log(this.isDev,this.userName)
        }
        return '11'
        // return this.userService.getUser()
    }
    
    @Get(':id')
    getUser(@Param('id') id:number,@Headers() headers:any){
        this.loggerServer.log('id '+id)
        console.log('headers '+ JSON.stringify(headers))
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
