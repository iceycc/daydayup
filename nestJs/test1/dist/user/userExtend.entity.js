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
exports.UserExtend = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserExtend = class UserExtend {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], UserExtend.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 11,
        nullable: true,
        name: 'mobile',
        comment: '手机号码',
    }),
    __metadata("design:type", String)
], UserExtend.prototype, "mobile", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        length: 50,
        nullable: true,
        name: 'address',
        comment: '地址',
    }),
    __metadata("design:type", String)
], UserExtend.prototype, "address", void 0);
__decorate([
    typeorm_1.OneToOne(type => user_entity_1.UserEntity, user => user.userDetail),
    typeorm_1.JoinColumn(),
    __metadata("design:type", user_entity_1.UserEntity)
], UserExtend.prototype, "user", void 0);
UserExtend = __decorate([
    typeorm_1.Entity({ name: 'user_extend' })
], UserExtend);
exports.UserExtend = UserExtend;
//# sourceMappingURL=userExtend.entity.js.map