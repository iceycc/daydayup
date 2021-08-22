"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt = void 0;
const node_sso_1 = require("node-sso");
class JWT {
    constructor(secret) {
        this.nodeSSO = new node_sso_1.default(secret);
    }
    createToken(user) {
        return this.nodeSSO.generateToken(user);
    }
    decodeToken(token) {
        return this.nodeSSO.decryptToken(token);
    }
}
exports.jwt = new JWT(process.env.SECRET);
//# sourceMappingURL=jwt.js.map