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
exports.PostController = void 0;
const common_1 = require("@nestjs/common");
const post_service_1 = require("./post.service");
let PostController = class PostController {
    constructor(postService) {
        this.postService = postService;
    }
    async addPost(body, res) {
        if (!body.title) {
            return this.postPage();
        }
        await this.postService.addPost(body);
        res.redirect('/post');
    }
    async postPage() {
        const posts = await this.postService.getPostList();
        return {
            title: '文章2',
            posts
        };
    }
    async delPost(id) {
        if (id) {
            const posts = await this.postService.delPost(id);
        }
        return this.postPage();
    }
    async patchPost(body) {
        if (body.id) {
            const posts = await this.postService.patchPost(body);
        }
        return this.postPage();
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPost", null);
__decorate([
    common_1.Get(),
    common_1.Render('post'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostController.prototype, "postPage", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "delPost", null);
__decorate([
    common_1.Patch(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "patchPost", null);
PostController = __decorate([
    common_1.Controller('post'),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostController);
exports.PostController = PostController;
//# sourceMappingURL=post.controller.js.map