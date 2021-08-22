import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    addPost(body: any, res: any): Promise<{
        title: string;
        posts: {
            id: number;
            title: string;
            author: string;
            desc: string;
        }[];
    }>;
    postPage(): Promise<{
        title: string;
        posts: {
            id: number;
            title: string;
            author: string;
            desc: string;
        }[];
    }>;
    delPost(id: any): Promise<{
        title: string;
        posts: {
            id: number;
            title: string;
            author: string;
            desc: string;
        }[];
    }>;
    patchPost(body: any): Promise<{
        title: string;
        posts: {
            id: number;
            title: string;
            author: string;
            desc: string;
        }[];
    }>;
}
