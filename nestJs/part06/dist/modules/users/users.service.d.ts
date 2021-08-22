import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    create(data: any): Promise<string>;
    deleteById(id: any): Promise<UsersEntity>;
    update(data: any): Promise<UsersEntity>;
    getUsers(): Promise<UsersEntity[]>;
    getUserById(id: any): Promise<UsersEntity>;
}
