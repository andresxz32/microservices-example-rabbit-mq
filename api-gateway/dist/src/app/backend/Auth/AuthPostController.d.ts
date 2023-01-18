import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from '../../data-object/create-user-dto';
export declare class AuthPostController {
    private readonly _clientProxy;
    constructor(_clientProxy: ClientProxy);
    signIn(authCredentialsDto: any): Promise<any>;
    signUp(createUserDto: CreateUserDto): Promise<any>;
}
