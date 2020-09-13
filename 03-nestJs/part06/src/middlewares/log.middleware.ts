import { Injectable, NestMiddleware, Body } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function ) {
    console.log('Request...');
    console.log('log',req.body)
    next();
  }
}
