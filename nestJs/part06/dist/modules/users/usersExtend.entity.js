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
exports.UsersExtendEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersExtendEntity = class UsersExtendEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], UsersExtendEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'moble',
        length: 11,
        nullable: true,
        comment: '手机号'
    }),
    __metadata("design:type", Number)
], UsersExtendEntity.prototype, "mobile", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'address',
        length: 100,
        nullable: true,
        comment: '地址'
    }),
    __metadata("design:type", String)
], UsersExtendEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column({
        type: 'tinyint',
        name: 'gender',
        comment: '性别:0男，1女'
    }),
    __metadata("design:type", Number)
], UsersExtendEntity.prototype, "gender", void 0);
__decorate([
    typeorm_1.CreateDateColumn({
        type: 'timestamp',
        name: 'created_at',
        comment: '创建时间'
    }),
    __metadata("design:type", Date)
], UsersExtendEntity.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({
        type: 'timestamp',
        name: 'update_at',
        comment: '更新时间'
    }),
    __metadata("design:type", Date)
], UsersExtendEntity.prototype, "update_at", void 0);
__decorate([
    typeorm_1.OneToOne(type => users_entity_1.UsersEntity, user => user.userDetail),
    typeorm_1.JoinColumn(),
    __metadata("design:type", users_entity_1.UsersEntity)
], UsersExtendEntity.prototype, "user", void 0);
UsersExtendEntity = __decorate([
    typeorm_1.Entity({ name: 'usersExtend' })
], UsersExtendEntity);
exports.UsersExtendEntity = UsersExtendEntity;
//# sourceMappingURL=usersExtend.entity.js.map