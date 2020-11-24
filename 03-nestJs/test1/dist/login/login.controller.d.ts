export declare class LoginController {
    loginPage(): {
        title: string;
    };
    login(body: {
        username: string;
        password: string | number;
    }, res: any, req: any): void;
    loginOut(req: any, res: any): void;
}
