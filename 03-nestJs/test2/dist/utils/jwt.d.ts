declare class JWT {
    private nodeSSO;
    constructor(secret: string);
    createToken(user: string | {
        [propsName: string]: any;
    }): string;
    decodeToken(token: string): string | null;
}
export declare const jwt: JWT;
export {};
