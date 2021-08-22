import { UsersExtendEntity } from "./usersExtend.entity";
import { PostEntity } from "../posts/posts.entity";
import { RoleEntity } from "../role/role.entity";
export declare class UsersEntity {
    private nodeAuth;
    constructor();
    id: number;
    username: string;
    password: string;
    email: string;
    isDel: number;
    createdAt: Date;
    updatedColumn: Date;
    isDelStr(): string;
    userDetail: UsersExtendEntity;
    posts: PostEntity[];
    roles: RoleEntity[];
    makePassword(): void;
    private get token();
    toResponseObject(isShowToken?: boolean): {
        [propsName: string]: any;
    };
}
