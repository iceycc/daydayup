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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../user/user.entity");
const tags_entity_1 = require("../tags/tags.entity");
let Posts = class Posts {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        length: 50,
        unique: true,
        name: 'title',
        comment: '标题'
    }),
    __metadata("design:type", String)
], Posts.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        type: 'text',
        nullable: true,
        name: 'content',
        comment: '内容'
    }),
    __metadata("design:type", String)
], Posts.prototype, "content", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        nullable: false,
        default: () => 0,
        name: 'is_del',
        comment: '是否删除,1表示删除,0表示正常'
    }),
    __metadata("design:type", Number)
], Posts.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], Posts.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'updated_at',
        comment: '更新时间',
    }),
    __metadata("design:type", Date)
], Posts.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, user => user.posts),
    __metadata("design:type", user_entity_1.UserEntity)
], Posts.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(type => tags_entity_1.Tags, tag => tag.posts),
    __metadata("design:type", Array)
], Posts.prototype, "tags", void 0);
Posts = __decorate([
    typeorm_1.Entity({ name: 'posts' })
], Posts);
exports.Posts = Posts;
//# sourceMappingURL=post.entity.js.map