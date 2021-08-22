import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getTmplates(path: string): Promise<{
        paths: any[];
    }>;
    getDemo(path: string): Promise<{
        paths: any[];
    }>;
}
