import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // 使用nestjs的装饰器装饰表示该类是一个控制器
export class AppController {
  constructor (
    // 使用依赖注入的方式注入一个类
    private readonly appService: AppService
  ) { }

  @Get() // 定义http的请求方式为get请求
  getHello(): string { // 函数名可以随便定义
    return this.appService.getHello(); // 控制层调用服务层的getHello()方法
  }
}