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
exports.LoginController = void 0;
const common_1 = require("@nestjs/common");
let LoginController = class LoginController {
    loginPage() {
        return {
            title: "登录"
        };
    }
    login(body, res, req) {
        console.log(body);
        const { username } = body;
        req.session.userkey = 'hello';
        res.cookie('username', username, { maxAge: 60 * 60 * 1000, httpOnly: true, signed: true });
        res.redirect('/home');
    }
    loginOut(req, res) {
        req.signedCookies.username.maxAge = 0;
        req.session.destoy(err => {
        });
    }
};
__decorate([
    common_1.Get(),
    common_1.Render('login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "loginPage", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Response()), __param(2, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "login", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Request()), __param(1, common_1.Response()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "loginOut", null);
LoginController = __decorate([
    common_1.Controller('login')
], LoginController);
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map