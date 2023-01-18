"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.use(helmet_1.default.xssFilter());
    app.use(helmet_1.default.noSniff());
    app.use(helmet_1.default.hidePoweredBy());
    app.use(helmet_1.default.frameguard({ action: 'deny' }));
    app.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY
    }));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map