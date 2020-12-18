import { UsersService } from './users.service';
import { CreateUserTdo } from './dto/create.user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(data: CreateUserTdo): Promise<{
        user: Record<string, any>;
        mobile: any;
        gender: number;
        qq: any;
        address: any;
    }>;
    deleteById(id: number): Promise<any>;
    update(body: Extract<any, any>): Promise<any>;
    getUsers(): Promise<any>;
    getUserById(id: number): Promise<any>;
}
