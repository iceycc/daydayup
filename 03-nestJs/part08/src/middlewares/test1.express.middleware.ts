import { Request, Response } from 'express';
// 使用`Express`的方式创建一个中间件

export const test1MiddleWares = (/*可以往中间件中传递参数*/) => {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return (req: Request, res: Response, next: any) => {
    console.log('全局express 中间件');
    next();
  }
}