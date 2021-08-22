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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const userExtend_entity_1 = require("./userExtend.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.userList2 = [
            {
                id: 0,
                name: '张三',
                password: '123456',
            }
        ];
    }
    async createUser(data) {
        console.log('111', data);
        const { name, password, email, mobile, gender, qq, address } = data;
        return typeorm_2.getManager()
            .transaction(async (entityManage) => {
            const user = await entityManage.save(user_entity_1.UserEntity, {
                name,
                password,
            });
            console.log(user);
            await entityManage.save(userExtend_entity_1.UserExtend, {
                userId: user.id,
                qq,
                address,
                email,
                mobile,
                gender
            });
        }).then(res => {
            console.log(res);
            return "创建成功2";
        }).catch(err => {
            return "创建失败";
        });
    }
    async userList() {
        return await this.userRepository.find();
    }
    addUser(body) {
        const { name = '', password = '' } = body;
        const newData = {
            name,
            password,
            id: ++this.userList2[this.userList2.length - 1].id
        };
        this.userList2.push(newData);
        return '添加成功';
    }
    deleteUserById(id) {
        const index = this.userList2.findIndex(item => item.id === id);
        this.userList2.splice(index, 1);
        return '删除成功';
    }
    modifyUserById(id, body) {
        const { name, password } = body;
        const index = this.userList2.findIndex(item => item.id === id);
        this.userList2.splice(index, 1, { id, name, password });
        return '修改成功';
    }
    list() {
        return this.userList2;
    }
    userById(id) {
        const item = this.userList2.find(item => item.id === id);
        return item;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map