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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const usersExtend_entity_1 = require("./usersExtend.entity");
const posts_entity_1 = require("../posts/posts.entity");
const role_entity_1 = require("../role/role.entity");
let UsersEntity = class UsersEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'username',
        unique: true,
        nullable: false,
        length: 50,
        comment: '用户名'
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'password',
        nullable: false,
        comment: '密码'
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        name: 'email',
        comment: '邮箱'
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        default: () => 0,
        name: 'is_del',
        comment: '是否已经删除,1已经删除，0正常'
    }),
    __metadata("design:type", Number)
], UsersEntity.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        comment: '更新时间'
    }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "updatedColumn", void 0);
__decorate([
    typeorm_1.OneToOne(type => usersExtend_entity_1.UsersExtendEntity, usersExtend => usersExtend.user),
    __metadata("design:type", usersExtend_entity_1.UsersExtendEntity)
], UsersEntity.prototype, "userDetail", void 0);
__decorate([
    typeorm_1.OneToMany(type => posts_entity_1.PostEntity, post => post.user),
    __metadata("design:type", Array)
], UsersEntity.prototype, "posts", void 0);
__decorate([
    typeorm_1.ManyToMany(type => role_entity_1.RoleEntity, role => role.user),
    __metadata("design:type", Array)
], UsersEntity.prototype, "roles", void 0);
UsersEntity = __decorate([
    typeorm_1.Entity({ name: 'users' })
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map