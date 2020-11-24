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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const path_1 = require("path");
const fs = require('fs');
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getTmplates(path) {
        var e_1, _a;
        const dir = await fs.promises.opendir(path_1.join(__dirname, '..', 'bootstrap'));
        let paths = [];
        try {
            for (var dir_1 = __asyncValues(dir), dir_1_1; dir_1_1 = await dir_1.next(), !dir_1_1.done;) {
                const dirent = dir_1_1.value;
                paths.push(dirent.name);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (dir_1_1 && !dir_1_1.done && (_a = dir_1.return)) await _a.call(dir_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        console.log(paths);
        return {
            paths: paths
        };
    }
    async getDemo(path) {
        var e_2, _a;
        const dir = await fs.promises.opendir(path_1.join(__dirname, '..', 'demo'));
        let paths = [];
        try {
            for (var dir_2 = __asyncValues(dir), dir_2_1; dir_2_1 = await dir_2.next(), !dir_2_1.done;) {
                const dirent = dir_2_1.value;
                paths.push(dirent.name);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (dir_2_1 && !dir_2_1.done && (_a = dir_2.return)) await _a.call(dir_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        console.log(paths);
        return {
            paths: paths
        };
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('bootstrap'),
    common_1.Render('bootstrap'),
    __param(0, common_1.Param('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTmplates", null);
__decorate([
    common_1.Get('demo'),
    common_1.Render('demo'),
    __param(0, common_1.Param('path')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDemo", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map