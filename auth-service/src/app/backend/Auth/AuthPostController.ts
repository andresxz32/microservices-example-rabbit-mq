import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy, MessagePattern } from '@nestjs/microservices';



@Controller()
export class AuthPostController {

    constructor(
        @Inject('USER_SERVICE')
        private readonly _userMicroservice: ClientProxy
    ) { }

    @MessagePattern({ cmd: 'sign-in' })
    signIn(name: string): string {
        this._userMicroservice.emit('findUser',{
            message:'Find user'
        })
        return `Sign In service`;
    }

    @MessagePattern({ cmd: 'sign-up' })
    async signUp(name: string): Promise<string> {
        return `Sign Up`;
    }
}


