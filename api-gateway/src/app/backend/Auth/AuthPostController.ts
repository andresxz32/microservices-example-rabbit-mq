import { Body, Controller, Inject, Post, UseGuards } from '@nestjs/common';
import { AuthValidator } from 'src/Contexts/app/Auth/application/AuthValidator';
import { LocalAuthGuard } from '../../../Contexts/app/Shared/local-auth.guard';



@Controller('authentication')
export class AuthPostController {

    constructor(
        private readonly _authValidator: AuthValidator
    ) { }


    @UseGuards(LocalAuthGuard)
    @Post('sign-in')
    async signIn(
        @Body() authCredentialsDto,
    ): Promise<any> {
        return this._authValidator.login({});
    }

}


