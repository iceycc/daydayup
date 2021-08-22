import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: Extract<any, any>): Promise<string>;
    deleteById(id: number): Promise<any>;
    update(body: Extract<any, any>): Promise<any>;
    getUsers(): Promise<any>;
    getUserById(id: number): Promise<any>;
}
