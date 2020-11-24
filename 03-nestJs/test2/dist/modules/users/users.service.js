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
const tool_service_1 = require("../../service/tool/tool.service");
const jsonwebtoken_1 = require("jsonwebtoken");
let UsersService = class UsersService {
    constructor(usersRepository, userRepository, toolsService) {
        this.usersRepository = usersRepository;
        this.userRepository = userRepository;
        this.toolsService = toolsService;
    }
    async create(data) {
        const { username, password, email, mobile, gender, qq, address } = data;
        return await typeorm_2.getManager().transaction(async (entityManager) => {
            const user = await this.userRepository.create({
                username,
                password,
                email
            });
            await entityManager.save(users_entity_1.UsersEntity, user);
            console.log('userid', user.id);
            const userExtend = await entityManager.save(usersExtend_entity_1.UsersExtendEntity, {
                user: user,
                mobile,
                gender: +gender,
                qq,
                address
            });
            return userExtend;
        })
            .then(res => {
            return res;
        })
            .catch(err => {
            console.log('failed');
            throw new common_1.HttpException('获取数据错误', common_1.HttpStatus.OK);
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
    async login(data) {
        const { username, password } = data;
        const user = await this.userRepository.findOne({ where: { username } });
        if (user && this.toolsService.checkPassword(password, user.password)) {
            const token = jsonwebtoken_1.default.createToken(String(user.id));
            const redisData = {
                token,
                user,
            };
            return Object.assign(Object.assign({}, user), { token });
        }
        else {
            return '账号或密码错误';
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __param(1, typeorm_1.InjectRepository(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        tool_service_1.ToolsService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map