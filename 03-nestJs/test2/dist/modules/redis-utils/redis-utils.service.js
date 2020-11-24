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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisUtilsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let RedisUtilsService = class RedisUtilsService {
    constructor(redisService) {
        this.redisService = redisService;
    }
    onModuleInit() {
        this.getClient();
    }
    getClient() {
        this.client = this.redisService.getClient();
    }
    async set(key, value, second) {
        value = JSON.stringify(value);
        if (!second) {
            await this.client.setex(key, 24 * 60 * 60, value);
        }
        else {
            await this.client.set(key, value, 'EX', second);
        }
    }
    async get(key) {
        const data = await this.client.get(key);
        if (data) {
            return JSON.parse(data);
        }
        else {
            return null;
        }
    }
    async del(key) {
        await this.client.del(key);
    }
    async flushall() {
        await this.client.flushall();
    }
};
RedisUtilsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof nestjs_redis_1.RedisService !== "undefined" && nestjs_redis_1.RedisService) === "function" ? _a : Object])
], RedisUtilsService);
exports.RedisUtilsService = RedisUtilsService;
//# sourceMappingURL=redis-utils.service.js.map