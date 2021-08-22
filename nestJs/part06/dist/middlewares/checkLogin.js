"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginMiddleWares = void 0;
exports.checkLoginMiddleWares = () => {
    return (req, res, next) => {
        let token = req.headers.token;
        if (token) {
            next();
        }
        else {
            res.send('没有token');
        }
    };
};
//# sourceMappingURL=checkLogin.js.map