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
exports.PostEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let PostEntity = class PostEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], PostEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'title',
        comment: '标题',
        nullable: false
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'content',
        length: '255',
        comment: '内容',
        nullable: true
    }),
    __metadata("design:type", String)
], PostEntity.prototype, "content", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        name: 'is_del',
        comment: '是否被删除',
        default: () => 0
    }),
    __metadata("design:type", Boolean)
], PostEntity.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], PostEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        name: 'update_at',
        comment: '更新时间'
    }),
    __metadata("design:type", Date)
], PostEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.UsersEntity, user => user.posts),
    __metadata("design:type", users_entity_1.UsersEntity)
], PostEntity.prototype, "user", void 0);
PostEntity = __decorate([
    typeorm_1.Entity({ name: 'posts' })
], PostEntity);
exports.PostEntity = PostEntity;
//# sourceMappingURL=posts.entity.js.map