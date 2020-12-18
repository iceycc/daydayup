import { UsersEntity } from './users.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './login/dto/login.dto';
import { ToolsService } from '../../service/tool/tool.service';
export declare class UsersService {
    private readonly usersRepository;
    private readonly userRepository;
    private readonly toolsService;
    constructor(usersRepository: Repository<UsersEntity>, userRepository: Repository<UsersEntity>, toolsService: ToolsService);
    create(data: any): Promise<{
        user: Record<string, any>;
        mobile: any;
        gender: number;
        qq: any;
        address: any;
    }>;
    deleteById(id: any): Promise<UsersEntity>;
    update(data: any): Promise<UsersEntity>;
    getUsers(): Promise<UsersEntity[]>;
    getUserById(id: any): Promise<UsersEntity>;
    login(data: LoginDto): Promise<any | string>;
}
