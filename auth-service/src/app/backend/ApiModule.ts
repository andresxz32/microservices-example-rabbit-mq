import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApplicationModule } from '../../Contexts/app/ApplicationModule';
import { AuthPostController } from './Auth/AuthPostController';
import { StatusGetController } from './StatusGetController';

const SERVICES = [
    ClientsModule.register([
        {
            name: 'USER_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'user_service',
                queueOptions: {
                    durable: true
                },
            },
        },
    ]),
]


@Module({
    controllers: [
        StatusGetController,
        AuthPostController
    ],
    imports: [
        ...SERVICES,
        ApplicationModule],

})
export class ApiModule { }