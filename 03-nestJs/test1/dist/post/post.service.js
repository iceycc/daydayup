"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
let posts = [
    { id: 1, title: 'post1', author: "ww", desc: 'x1111111' },
    { id: 2, title: 'post2', author: "ww", desc: 'x222' },
    { id: 3, title: 'post3', author: "ww", desc: 'x1331111' },
    { id: 4, title: 'post4', author: "ww", desc: '4411111' },
    { id: 5, title: 'post5', author: "ww", desc: '555511111' },
];
let index = 5;
let PostService = class PostService {
    addPost(post) {
        console.log('addPost', post);
        post.id = index++;
        posts.push(post);
        post = [];
        return posts;
    }
    getPostList() {
        return posts;
    }
    delPost(id) {
        console.log(id);
        let index = posts.findIndex(item => item.id == id);
        console.log('delPost', index);
        posts.splice(index, 1);
        console.log(posts);
        return posts;
    }
    patchPost(post) {
        let id = post.id;
        posts.forEach((item, index) => {
            if (item.id == id) {
                posts[index] = post;
                posts[index].id = item.id;
            }
        });
        console.log('patchPost', posts);
        return posts;
    }
};
PostService = __decorate([
    common_1.Injectable()
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map