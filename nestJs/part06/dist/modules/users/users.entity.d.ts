import { UsersExtendEntity } from "./usersExtend.entity";
import { PostEntity } from "../posts/posts.entity";
import { RoleEntity } from "../role/role.entity";
export declare class UsersEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    isDel: number;
    createdAt: Date;
    updatedColumn: Date;
    userDetail: UsersExtendEntity;
    posts: PostEntity[];
    roles: RoleEntity[];
}
