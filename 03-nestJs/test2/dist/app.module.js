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
const nestjs_config_1 = require("nestjs-config");
require("dotenv/config");
const path = require("path");
const user_middleware_1 = require("./middlewares/user.middleware");
const redis_utils_module_1 = require("./modules/redis-utils/redis-utils.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(user_middleware_1.UserMiddleware)
            .forRoutes('users');
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_config_1.ConfigModule.load(path.resolve(__dirname, 'config', '**/!(*.d).{ts,js}'), {
                modifyConfigName: name => name.replace('.config', ''),
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async (config) => ({
                    type: config.get('database.type'),
                    host: config.get('database.host'),
                    port: config.get('database.port'),
                    username: config.get('database.username'),
                    password: config.get('database.password'),
                    database: config.get('database.database'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    logging: config.get('database.logging'),
                    timezone: '+08:00',
                }),
                inject: [nestjs_config_1.ConfigService]
            }),
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            role_module_1.RoleModule,
            redis_utils_module_1.RedisUtilsModule
        ],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map