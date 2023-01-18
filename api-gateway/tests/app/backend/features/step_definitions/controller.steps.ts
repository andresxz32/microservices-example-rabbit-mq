import * as assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import * as request from 'supertest'
import { INestApplication, HttpStatus, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../../../../../src/app.module';

let _request: request.Test;
let application: INestApplication;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
  _request = request(application.getHttpServer()).get(route);
});

Then('the response status code should be {int}', async (status: number) => {
  _response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
  _request = request(application.getHttpServer()).put(route).send(JSON.parse(body));
});

Then('the response should be empty', () => {
  assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();
  application = moduleRef.createNestApplication();
  application.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
  }));
  await application.init();
});

AfterAll(async () => {
  await application.close();
});
