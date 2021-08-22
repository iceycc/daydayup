"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./modules/users/users.module");
const posts_module_1 = require("./modules/posts/posts.module");
const role_module_1 = require("./modules/role/role.module");
const typeorm_1 = require("@nestjs/typeorm");
require("dotenv/config");
const log_middleware_1 = require("./middlewares/log.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(log_middleware_1.LogMiddleware)
            .forRoutes('users');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_DATABASE,
                synchronize: true,
                logging: false,
                entities: [
                    __dirname + '/**/*.entity{.ts,.js}'
                ]
            }), users_module_1.UsersModule, posts_module_1.PostsModule, role_module_1.RoleModule],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map