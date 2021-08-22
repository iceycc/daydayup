import { Repository } from 'typeorm';
import { PostEntity } from './posts.entity';
import { UsersEntity } from '../users/users.entity';
export declare class PostsService {
    private readonly postRepository;
    private readonly userRepository;
    constructor(postRepository: Repository<PostEntity>, userRepository: Repository<UsersEntity>);
    createPostByUserId(data: any): Promise<{
        user: Record<string, any>;
        title: any;
        content: any;
    } & PostEntity>;
    delectPostById(id: any): Promise<PostEntity>;
    update(data: any): Promise<void>;
    getPostsByUserId(userId: any): Promise<Record<string, any>>;
    getPostById(id: any): Promise<PostEntity[]>;
    getPosts(): Promise<PostEntity[]>;
}
