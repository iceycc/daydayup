"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModule = void 0;
const common_1 = require("@nestjs/common");
const role_controller_1 = require("./role.controller");
const role_service_1 = require("./role.service");
const typeorm_1 = require("@nestjs/typeorm");
const role_entity_1 = require("./role.entity");
const users_entity_1 = require("../users/users.entity");
let RoleModule = class RoleModule {
};
RoleModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                role_entity_1.RoleEntity,
                users_entity_1.UsersEntity
            ])
        ],
        controllers: [role_controller_1.RoleController],
        providers: [role_service_1.RoleService]
    })
], RoleModule);
exports.RoleModule = RoleModule;
//# sourceMappingURL=role.module.js.map