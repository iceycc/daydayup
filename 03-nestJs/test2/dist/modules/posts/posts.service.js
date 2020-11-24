"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
const users_entity_1 = require("../users/users.entity");
let PostsService = class PostsService {
    constructor(postRepository, userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }
    async createPostByUserId(data) {
        console.log(data);
        const { userId, title, content } = data;
        const user = await this.userRepository.findOne(userId);
        return await this.postRepository.save({
            user: user,
            title, content
        });
    }
    async delectPostById(id) {
        const post = await this.postRepository.findOne(id);
        return await this.postRepository.remove(post);
    }
    async update(data) {
        const { title, content, id } = data;
        const post = await this.postRepository.findOne(id);
        post.title = title;
        post.content = content;
        await this.postRepository.save(post);
    }
    async getPostsByUserId(userId) {
        console.log('userId', userId);
        const user = await this.userRepository.find({ where: { id: userId }, relations: ['posts'] });
        console.log(JSON.stringify(user));
        console.log(user.get('posts'));
        return user;
    }
    async getPostById(id) {
        return await this.postRepository.find({ where: { id } });
    }
    async getPosts() {
        return await this.postRepository.find();
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(posts_entity_1.PostEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map