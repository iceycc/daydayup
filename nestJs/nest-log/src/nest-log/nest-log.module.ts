import { Module, DynamicModule } from '@nestjs/common';
import { NestLogService } from './services/nest-log.service';

@Module({})
export class NestLogModule {
  static register(prefix: string): DynamicModule {
    return {
      module: NestLogModule,
      providers: [
        NestLogService,
        // 使用useValue的方式在模块中注入一个变量,可以理解为在该模块中注入了别的模块,只是注入的方式不是采用import
        // 而是采用模块调用静态方法的方式
        {
          provide: 'PREFIX',
          useValue: prefix
        }
      ],
      // 动态模块一样的也要对外暴露出去
      exports: [
        NestLogService
      ]
    }
  }
}