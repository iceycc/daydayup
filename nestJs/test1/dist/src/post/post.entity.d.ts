import { UserEntity } from '../user/user.entity';
import { Tags } from '../tags/tags.entity';
export declare class Posts {
    id: number;
    title: string;
    content: string;
    isDel: number;
    createdAt: Date;
    updateAt: Date;
    user: UserEntity;
    tags: Tags[];
}
