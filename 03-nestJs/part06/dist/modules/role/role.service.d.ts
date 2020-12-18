import { Repository } from 'typeorm';
import { RoleEntity } from './role.entity';
import { UsersEntity } from '../users/users.entity';
export declare class RoleService {
    private readonly roleRepository;
    private readonly userRepository;
    constructor(roleRepository: Repository<RoleEntity>, userRepository: Repository<UsersEntity>);
    createRoleByUserId(data: any): Promise<({
        user: Record<string, any>[];
        rolename: any;
    } & RoleEntity) | ({
        rolename: any;
    } & RoleEntity)>;
    delectRoleById(id: any): Promise<RoleEntity>;
    update(data: any): Promise<void>;
    getRolesByUserId(userId: any): Promise<RoleEntity[]>;
    getRoleById(id: any): Promise<RoleEntity[]>;
    getRoles(): Promise<RoleEntity[]>;
}
