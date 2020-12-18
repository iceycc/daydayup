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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("./role.entity");
const users_entity_1 = require("../users/users.entity");
let RoleService = class RoleService {
    constructor(roleRepository, userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }
    async createRoleByUserId(data) {
        console.log(data);
        const { userId, rolename } = data;
        if (userId) {
            const user = await this.userRepository.findOne(userId);
            return await this.roleRepository.save({
                user: [user],
                rolename
            });
        }
        else {
            return await this.roleRepository.save({
                rolename
            });
        }
    }
    async delectRoleById(id) {
        const role = await this.roleRepository.findOne(id);
        return await this.roleRepository.remove(role);
    }
    async update(data) {
        const { rolename, id } = data;
        const role = await this.roleRepository.findOne(id);
        role.rolename = rolename;
        await this.roleRepository.save(role);
    }
    async getRolesByUserId(userId) {
        console.log('userId', userId);
        return await this.roleRepository.find({ where: { userId: userId } });
    }
    async getRoleById(id) {
        return await this.roleRepository.find({ where: { id } });
    }
    async getRoles() {
        return await this.roleRepository.find();
    }
};
RoleService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(role_entity_1.RoleEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map