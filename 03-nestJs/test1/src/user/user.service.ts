import { Injectable,OnModuleInit } from '@nestjs/common';

@Injectable()
export class UserService implements OnModuleInit {
  onModuleInit(){
    console.log(`The module has been initialized.`);
  }
  getUser(): Record<string, any>[] {
    return [
      {
        id:1,
        name: 'Jerry',
      },
      {
          id:2,
          name:'Tom'
      }
    ];
  }
}
