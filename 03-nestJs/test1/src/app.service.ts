import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // 现在直接返回一个字符串,实际开发中这里调用typeorm中的方法对数据库进行curd操作
    return 'Hello World!';
  }
}