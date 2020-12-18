import { RedisService } from 'nestjs-redis';
import { Redis } from 'ioredis';
export declare class RedisUtilsService {
    private redisService;
    client: Redis;
    constructor(redisService: RedisService);
    onModuleInit(): void;
    getClient(): void;
    set(key: string, value: {
        [propsName: string]: any;
    } | string, second?: number): Promise<void>;
    get(key: string): Promise<any>;
    del(key: string): Promise<any>;
    flushall(): Promise<any>;
}
