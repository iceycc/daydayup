import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from '../../services/login/login.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService:LoginService
  ) {
  }

  @Post()
  async login(
    @Body() body:any
  ):Promise<any>{
    return this.loginService.login(body)
  }

}
