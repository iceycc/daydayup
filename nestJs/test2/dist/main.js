"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
require("dotenv/config");
const test1_express_middleware_1 = require("./middlewares/test1.express.middleware");
const log_middleware_1 = require("./middlewares/log.middleware");
const auth_guard_1 = require("./guard/auth.guard");
const transform_interceptor_1 = require("./interceptors/transform.interceptor");
const valitation_pipe_1 = require("./pipes/validation/valitation.pipe");
const http_exceotion_filter_1 = require("./filters/http-exceotion.filter");
var bodyParser = require('body-parser');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(test1_express_middleware_1.test1MiddleWares());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(new log_middleware_1.LogMiddleware().use);
    app.useGlobalGuards(new auth_guard_1.AuthGuard());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    app.useGlobalPipes(new valitation_pipe_1.ValidationPipe());
    app.useGlobalFilters(new http_exceotion_filter_1.HttpExceptionFilter());
    await app.listen(process.env.PORT, () => {
        common_1.Logger.log('启动： http:127.0.0.1:' + process.env.PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map