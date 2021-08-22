import { UserExtend } from "./userExtend.entity";
import { Posts } from "../post/post.entity";
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    isDel: number;
    createdAt: Date;
    updateAt: Date;
    userDetail: UserExtend;
    posts: Posts[];
}
