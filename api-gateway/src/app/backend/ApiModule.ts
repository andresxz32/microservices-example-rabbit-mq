import { Module } from '@nestjs/common';


import { StatusGetController } from './StatusGetController';
import { AuthPostController } from './Auth/AuthPostController';
import { ApplicationModule } from 'src/Contexts/app/ApplicationModule';


@Module({
    controllers: [
        StatusGetController,

        AuthPostController,
    ],
    imports: [
        ApplicationModule
    ],

})
export class ApiModule { }