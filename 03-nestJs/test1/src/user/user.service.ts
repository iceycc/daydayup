import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
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
