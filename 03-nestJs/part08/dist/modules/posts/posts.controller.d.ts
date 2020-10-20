import { PostsService } from './posts.service';
import { PostEntity } from './posts.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPostByUserId(body: PostEntity): Promise<{
        user: Record<string, any>;
        title: any;
        content: any;
    } & PostEntity>;
    deletePostById(id: number): Promise<PostEntity>;
    getPostById(id: number): Promise<PostEntity[]>;
    getPosts(userId: number): Promise<Record<string, any>>;
}
