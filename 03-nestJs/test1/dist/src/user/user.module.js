"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                user_entity_1.UserEntity,
            ])
        ],
        controllers: [user_controller_1.UserController],
        providers: [
            {
                provide: user_service_1.UserService,
                useClass: user_service_1.UserService,
            },
            {
                provide: 'USER_NAME',
                useFactory: logger => {
                    return '工厂方式返回 userName';
                },
            },
            {
                provide: 'IS_DEV',
                useValue: { isDev: true },
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=user.module.js.map