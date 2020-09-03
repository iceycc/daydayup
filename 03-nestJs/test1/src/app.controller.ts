import { Controller, Get, Response,Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path'; 
import {Response as Res} from 'express'
const fs = require('fs');
@Controller() // 使用nestjs的装饰器装饰表示该类是一个控制器
export class AppController {
  constructor(
    // 使用依赖注入的方式注入一个类
    private readonly appService: AppService,
  ) {}

  @Get() // 定义http的请求方式为get请求
  getHello(): string {
    // 函数名可以随便定义
    return this.appService.getHello(); // 控制层调用服务层的getHello()方法
  }

  @Get('bootstrap')
  @Render('bootstrap')
  async getTmplates(@Param('path') path:string ) {
    const dir = await fs.promises.opendir(join(__dirname,'..','bootstrap'));
    let paths = []
    for await (const dirent of dir) {
      paths.push(dirent.name)
    }
    console.log(paths)
    return {
      paths:paths
    }
  }

  @Get('demo')
  @Render('demo')
  async getDemo(@Param('path') path:string ) {
    const dir = await fs.promises.opendir(join(__dirname,'..','demo'));
    let paths = []
    for await (const dirent of dir) {
      paths.push(dirent.name)
    }
    console.log(paths)
    return {
      paths:paths
    }
  }
}
