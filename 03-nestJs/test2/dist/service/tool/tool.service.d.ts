export declare class ToolsService {
    private nodeAuth;
    constructor();
    makePassword(password: string): string;
    checkPassword(password: string, sqlPassword: string): boolean;
}
