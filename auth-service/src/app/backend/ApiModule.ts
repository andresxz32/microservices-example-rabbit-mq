import { Module } from '@nestjs/common';
import { ApplicationModule } from '../../Contexts/app/ApplicationModule';
import { AuthPostController } from './Auth/AuthPostController';
import { StatusGetController } from './StatusGetController';

@Module({
    controllers: [
        StatusGetController,
        AuthPostController
    ],
    imports: [ApplicationModule],

})
export class ApiModule { }