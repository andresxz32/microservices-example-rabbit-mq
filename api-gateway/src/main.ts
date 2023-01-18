import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { HttpStatus, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(helmet.xssFilter())
  app.use(helmet.noSniff())
  app.use(helmet.hidePoweredBy());
  app.use(helmet.frameguard({ action: 'deny' }));
  app.useGlobalPipes(new ValidationPipe({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
  }));
  await app.listen(5000);
}
bootstrap();
