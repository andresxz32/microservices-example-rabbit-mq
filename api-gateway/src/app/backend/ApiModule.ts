import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';


import { StatusGetController } from './StatusGetController';
import { AuthPostController } from './Auth/AuthPostController';
import { AuthGetController } from './Auth/AuthGetController';

const QUEUES_SERVICES = [
    ClientsModule.register([
        {
            name: 'AUTH_SERVICE',
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'auth_queue',
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
        ...QUEUES_SERVICES
    ],

})
export class ApiModule { }