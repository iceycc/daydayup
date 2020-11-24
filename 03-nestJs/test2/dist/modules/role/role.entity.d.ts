import { UsersEntity } from "../users/users.entity";
export declare class RoleEntity {
    id: number;
    rolename: string;
    isDel: number;
    createdAt: Date;
    updateAt: Date;
    user: UsersEntity[];
}
