import { RoleService } from './role.service';
import { RoleEntity } from './role.entity';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    createRoleByUserId(body: RoleEntity): Promise<({
        user: Record<string, any>[];
        rolename: any;
    } & RoleEntity) | ({
        rolename: any;
    } & RoleEntity)>;
    deleteRoleById(id: number): Promise<RoleEntity>;
    getRoleById(id: number): Promise<RoleEntity[]>;
    getRole(userId: number): Promise<RoleEntity[]>;
}
