import { Injectable,Inject } from '@nestjs/common';

@Injectable()
export class LoggerService {
    constructor(
        @Inject('PREFIX') private readonly prefix:string
    ){}
    log(str:string|number):void{
        console.log('日志log: ' + this.prefix, str)
    }
    error(str:string|number):void{
        console.log('日志error: '+ this.prefix, str)
    }
}
