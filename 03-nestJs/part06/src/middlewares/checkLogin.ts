import { Request, Response } from 'express';
// 使用`Express`的方式创建一个中间件

export const checkLoginMiddleWares = (/*可以往中间件中传递参数*/) => {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    return (req: Request, res: Response, next: any) => {
        console.log(req.headers)
        let token = req.headers.token
        if(token){
             next();
        }else{
            res.send('没有token')
        }
    }
}