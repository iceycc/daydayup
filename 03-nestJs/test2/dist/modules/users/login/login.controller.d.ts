import { LoginDto } from './dto/login.dto';
import { UsersService } from '../users.service';
export declare class LoginController {
    private readonly userService;
    constructor(userService: UsersService);
    login(data: LoginDto): Promise<any>;
}
