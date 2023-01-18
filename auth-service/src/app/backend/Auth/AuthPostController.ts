import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';



@Controller()
export class AuthPostController {

    constructor(
    ) { }

    @MessagePattern({ cmd: 'sign-in' })
    signIn(name: string): string {
        return `Hi ${JSON.stringify(name)}`;
    }

    @MessagePattern({ cmd: 'sign-up' })
    async signUp(name: string): Promise<string> {
        return `Hi ${name} Async`;
    }
}


