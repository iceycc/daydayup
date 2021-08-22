"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test1MiddleWares = void 0;
exports.test1MiddleWares = () => {
    return (req, res, next) => {
        console.log('test1中间件');
        next();
    };
};
//# sourceMappingURL=test1.js.map