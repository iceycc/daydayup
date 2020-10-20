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
exports.RoleEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("../users/users.entity");
let RoleEntity = class RoleEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'rolename',
        comment: '角色名',
        length: 100,
        unique: true
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "rolename", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        name: 'is_del',
        comment: '是否删除，0为正常，1为不正常',
        default: () => 0
    }),
    __metadata("design:type", Number)
], RoleEntity.prototype, "isDel", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        name: 'updated_at',
        comment: '更新时间'
    }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "updateAt", void 0);
__decorate([
    typeorm_1.ManyToMany(type => users_entity_1.UsersEntity, user => user.roles),
    typeorm_1.JoinTable({ name: 'user_role' }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "user", void 0);
RoleEntity = __decorate([
    typeorm_1.Entity({ name: 'role' })
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map