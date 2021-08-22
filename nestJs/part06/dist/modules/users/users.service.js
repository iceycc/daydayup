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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
const usersExtend_entity_1 = require("./usersExtend.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        console.log(data);
        const { username, password, email, mobile, gender, qq, address } = data;
        return await typeorm_2.getManager().transaction(async (entityManager) => {
            const user = await entityManager.save(users_entity_1.UsersEntity, {
                username,
                password,
                email
            });
            console.log('userid', user.id);
            await entityManager.save(usersExtend_entity_1.UsersExtendEntity, {
                user: user,
                mobile,
                gender: +gender,
                qq,
                address
            });
        })
            .then(res => {
            console.log('success');
            return 'success';
        })
            .catch(err => {
            console.log('failed');
            return 'failed';
        });
    }
    async deleteById(id) {
        const user = await this.usersRepository.findOne(id);
        return await this.usersRepository.remove(user);
    }
    async update(data) {
        const { password, username, id } = data;
        const user = await this.usersRepository.findOne(id);
        user.password = password;
        user.username = username;
        return this.usersRepository.save(user);
    }
    async getUsers() {
        return await this.usersRepository.find({ relations: ['userDetail', 'posts', 'roles'] });
    }
    async getUserById(id) {
        return await this.usersRepository.findOne(id, { relations: ['userDetail', 'posts', 'roles'] });
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map