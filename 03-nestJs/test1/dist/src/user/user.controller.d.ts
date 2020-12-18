import { UserService } from './user.service';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(data: Extract<any, any>): Promise<string>;
    userList(): Promise<UserEntity[]>;
}
