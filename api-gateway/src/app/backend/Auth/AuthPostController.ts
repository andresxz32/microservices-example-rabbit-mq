import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '../../data-object/create-user-dto';
import { UserAuthCredentialsDto } from '../../data-object/user-auth-credentials-dto';



@Controller('authentication')
export class AuthPostController {

    constructor(
        @Inject('AUTH_SERVICE') private readonly _clientProxy: ClientProxy
    ) { }

    @Post('sign-in')
    async signIn(
        @Body() authCredentialsDto,
    ): Promise<any> {
        return await this._clientProxy.send({ cmd: 'sign-in' }, authCredentialsDto)
    }

    @Post('sign-up')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<any> {
        return await this._clientProxy.send({ cmd: 'sign-up' }, createUserDto)

    }
}


