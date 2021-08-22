"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisUtilsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
const redis_utils_service_1 = require("./redis-utils.service");
let RedisUtilsModule = class RedisUtilsModule {
};
RedisUtilsModule = __decorate([
    common_1.Global(),
    common_1.Module({
        imports: [
            nestjs_redis_1.RedisModule.register({
                port: 6379,
                host: '127.0.0.1',
                password: '',
                db: 0
            })
        ],
        providers: [
            redis_utils_service_1.RedisUtilsService,
        ],
        exports: [
            redis_utils_service_1.RedisUtilsService,
        ]
    })
], RedisUtilsModule);
exports.RedisUtilsModule = RedisUtilsModule;
//# sourceMappingURL=redis-utils.module.js.map