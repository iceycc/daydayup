export declare class PostService {
    addPost(post: any): {
        id: number;
        title: string;
        author: string;
        desc: string;
    }[];
    getPostList(): {
        id: number;
        title: string;
        author: string;
        desc: string;
    }[];
    delPost(id: any): {
        id: number;
        title: string;
        author: string;
        desc: string;
    }[];
    patchPost(post: any): {
        id: number;
        title: string;
        author: string;
        desc: string;
    }[];
}
