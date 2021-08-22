import { UserService } from './user.service';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(data: {
        [propName: string]: any;
    }): Promise<UserEntity>;
    userList(): Promise<UserEntity[]>;
    addUser(body: {
        [propsName: string]: any;
    }): string;
    deleteUserById(id: number): string;
    modifyUserById(id: number, body: {
        [propsName: string]: any;
    }): string;
    list(): any[];
    userById(id: number): {
        [propsName: string]: any;
    };
}
