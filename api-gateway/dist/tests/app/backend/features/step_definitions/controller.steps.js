"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const cucumber_1 = require("@cucumber/cucumber");
const request = require("supertest");
const common_1 = require("@nestjs/common");
const testing_1 = require("@nestjs/testing");
const app_module_1 = require("../../../../../src/app.module");
let _request;
let application;
let _response;
(0, cucumber_1.Given)('I send a GET request to {string}', (route) => {
    _request = request(application.getHttpServer()).get(route);
});
(0, cucumber_1.Then)('the response status code should be {int}', async (status) => {
    _response = await _request.expect(status);
});
(0, cucumber_1.Given)('I send a PUT request to {string} with body:', (route, body) => {
    _request = request(application.getHttpServer()).put(route).send(JSON.parse(body));
});
(0, cucumber_1.Then)('the response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
});
(0, cucumber_1.BeforeAll)(async () => {
    const moduleRef = await testing_1.Test.createTestingModule({
        imports: [app_module_1.AppModule],
    }).compile();
    application = moduleRef.createNestApplication();
    application.useGlobalPipes(new common_1.ValidationPipe({
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY
    }));
    await application.init();
});
(0, cucumber_1.AfterAll)(async () => {
    await application.close();
});
//# sourceMappingURL=controller.steps.js.map