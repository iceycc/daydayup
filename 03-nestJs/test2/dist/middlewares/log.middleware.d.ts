import { NestMiddleware } from '@nestjs/common';
export declare class LogMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function): void;
}
