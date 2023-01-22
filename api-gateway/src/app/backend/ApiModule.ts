import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';


import { StatusGetController } from './StatusGetController';
import { AuthPostController } from './Auth/AuthPostController';
import { AuthGetController } from './Auth/AuthGetController';

const SERVICES = [
    ClientsModule.register([
        {
            name: 'AUTH_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'auth_service',
                queueOptions: {
                    durable: false
                },
            },
        },
    ]),
]

@Module({
    controllers: [
        StatusGetController,

        AuthPostController,
        AuthGetController
    ],
    imports: [
        ...SERVICES
    ],

})
export class ApiModule { }