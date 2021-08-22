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
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const userExtend_entity_1 = require("./userExtend.entity");
const post_entity_1 = require("../post/post.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        length: 50,
        unique: true,
        name: 'username',
        comment: '用户名'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false,
        length: 100,
        comment: '密码'
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column('tinyint', {
        nullable: false,
        default: () => 0,
        name: 'is_del',
        comment: '是否删除，1表示删除，0表示正常'
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        nullable: false,
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: "timestamp",
        nullable: false,
        name: 'update_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.OneToOne(type => userExtend_entity_1.UserExtend, userExtend => userExtend.user),
    __metadata("design:type", userExtend_entity_1.UserExtend)
], UserEntity.prototype, "userDetail", void 0);
__decorate([
    typeorm_1.OneToMany(type => post_entity_1.Posts, post => post.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
UserEntity = __decorate([
    typeorm_1.Entity({ name: 'user' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map