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
const typeorm_1 = require("@nestjs/typeorm");
const nestjs_config_1 = require("nestjs-config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const post_module_1 = require("./post/post.module");
const user_module_1 = require("./user/user.module");
const logger_module_1 = require("./logger/logger.module");
const home_module_1 = require("./home/home.module");
const login_module_1 = require("./login/login.module");
const tags_module_1 = require("./tags/tags.module");
const path = require("path");
let AppModule = class AppModule {
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
                }),
                inject: [nestjs_config_1.ConfigService],
            }),
            post_module_1.PostModule, user_module_1.UserModule, logger_module_1.LoggerModule.register('app'), home_module_1.HomeModule, login_module_1.LoginModule, tags_module_1.TagsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
        exports: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map