import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    createUser(data: {
        [propName: string]: any;
    }): Promise<UserEntity>;
    userList(): Promise<UserEntity[]>;
    userList2: {
        id: number;
        name: string;
        password: string;
    }[];
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
