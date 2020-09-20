import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserTdo {
  // 定义多个校验的装饰器,执行顺序是从下往上执行的,先执行IsNotEmpty然后执行IsString
  @IsString({ message: '用户名必须为字符串类型' })
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string

  @IsString({ message: '密码必须为字符串类型' })
  @IsNotEmpty({ message: '密码不能为空' })
  password: string;
}