"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
require("dotenv/config");
const test1_1 = require("./middlewares/test1");
const checkLogin_1 = require("./middlewares/checkLogin");
var bodyParser = require('body-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(test1_1.test1MiddleWares());
    app.use(checkLogin_1.checkLoginMiddleWares());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    await app.listen(process.env.PORT, () => {
        common_1.Logger.log('启动： http:127.0.0.1:' + process.env.PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map