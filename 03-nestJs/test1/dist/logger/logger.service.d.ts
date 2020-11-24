export declare class LoggerService {
    private readonly prefix;
    constructor(prefix: string);
    log(str: string | number): void;
    error(str: string | number): void;
}
