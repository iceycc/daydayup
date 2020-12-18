"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = exports.getDay = exports.formatDate = void 0;
const moment = require("moment");
exports.formatDate = (dateNum, isDue = false) => {
    if (!/^\d+$/.test(dateNum.toString())) {
        throw new TypeError(`${dateNum}传递的数据格式化错误`);
    }
    if (isDue) {
        return moment(dateNum).format('YYYY-MM-DD');
    }
    else {
        return moment(dateNum).format('YYYY-MM-DD HH:mm:ss');
    }
};
exports.getDay = (date = new Date()) => {
    return moment(date).format('YYYYMMDD');
};
exports.getTime = () => {
    return new Date().getTime();
};
//# sourceMappingURL=date.js.map