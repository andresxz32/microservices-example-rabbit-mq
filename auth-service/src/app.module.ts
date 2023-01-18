import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './app/backend/ApiModule';
import { getEnvPath } from './Contexts/app/Shared/infrastructure/env.helper';



const envFilePath: string = getEnvPath(`${__dirname}/Contexts/app/Shared/infrastructure/config`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    ApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
