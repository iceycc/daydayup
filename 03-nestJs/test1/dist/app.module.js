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
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const post_module_1 = require("./post/post.module");
const user_module_1 = require("./user/user.module");
const logger_module_1 = require("./logger/logger.module");
const home_module_1 = require("./home/home.module");
const login_module_1 = require("./login/login.module");
const tags_module_1 = require("./tags/tags.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: '101.201.150.143',
                port: 3306,
                username: 'amis',
                password: 'zwwlamis!',
                database: 'ormdb',
                synchronize: true,
                logging: false,
                entities: [
                    __dirname + '/**/*.entity{.ts,.js}'
                ],
            }), post_module_1.PostModule, user_module_1.UserModule, logger_module_1.LoggerModule.register('app'), home_module_1.HomeModule, login_module_1.LoginModule, tags_module_1.TagsModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
        ],
        exports: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map