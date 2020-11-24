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
exports.Tags = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("../post/post.entity");
let Tags = class Tags {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn({
        type: 'int',
        name: 'id',
        comment: '主键id'
    }),
    __metadata("design:type", Number)
], Tags.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        name: 'name',
        nullable: false,
        unique: true,
        comment: 'tag名称'
    }),
    __metadata("design:type", String)
], Tags.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => post_entity_1.Posts, post => post.tags),
    typeorm_1.JoinTable({ name: 'tags_posts' }),
    __metadata("design:type", Array)
], Tags.prototype, "posts", void 0);
Tags = __decorate([
    typeorm_1.Entity('tags')
], Tags);
exports.Tags = Tags;
//# sourceMappingURL=tags.entity.js.map