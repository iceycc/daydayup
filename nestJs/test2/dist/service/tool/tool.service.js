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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolsService = void 0;
const common_1 = require("@nestjs/common");
const node_auth0_1 = require("node-auth0");
let ToolsService = class ToolsService {
    constructor() {
        this.nodeAuth = new node_auth0_1.default();
    }
    makePassword(password) {
        return this.nodeAuth.makePassword(password);
    }
    checkPassword(password, sqlPassword) {
        return this.nodeAuth.checkPassword(password, sqlPassword);
    }
};
ToolsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ToolsService);
exports.ToolsService = ToolsService;
//# sourceMappingURL=tool.service.js.map