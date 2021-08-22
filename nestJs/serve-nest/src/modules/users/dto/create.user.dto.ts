import { IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class CreateUserTdo {
  // 定义多个校验的装饰器,执行顺序是从下往上执行的,先执行IsNotEmpty然后执行IsString
  @ApiProperty({ required: true, description: '用户名' })
  @IsString({ message: '用户名必须为字符串类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;

  @ApiProperty({ required: true, description: '密码' })
  @IsString({ message: '密码必须为字符串类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}