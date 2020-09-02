import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
    log(str:string|number):void{
        console.log('日志log: ', str)
    }
    error(str:string|number):void{
        console.log('日志error: ', str)
    }
}
