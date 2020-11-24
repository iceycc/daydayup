import { UsersEntity } from '../users/users.entity';
export declare class PostEntity {
    id: number;
    title: string;
    content: string;
    isDel: boolean;
    createdAt: Date;
    updateAt: Date;
    user: UsersEntity;
}
