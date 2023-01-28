import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthValidator } from './Auth/application/AuthValidator';
import { JwtModule } from '@nestjs/jwt';

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
    imports: [
        ...SERVICES,
        JwtModule.register({
            secret: 'yoursecret',
            signOptions: { expiresIn: '60s' }
        })
    ],
    //Use cases
    providers: [AuthValidator],
    exports: [AuthValidator]
})
export class ApplicationModule { }
