"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
require("dotenv/config");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const path_1 = require("path");
const PORT = process.env.PORT || 8080;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets(path_1.join(__dirname, '..', 'public'), {
        prefix: '/static/'
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'bootstrap'), {
        prefix: '/bootstrap/'
    });
    app.useStaticAssets(path_1.join(__dirname, '..', 'demo'), {
        prefix: '/demo/'
    });
    app.setBaseViewsDir(path_1.join(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    app.use(cookieParser(process.env.SECRET));
    app.use(expressSession({ secret: process.env.SECRET, cookie: { maxAge: 60 * 1000 } }));
    await app.listen(PORT, () => {
        console.log('启动了: http://127.0.0.1:' + PORT);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map