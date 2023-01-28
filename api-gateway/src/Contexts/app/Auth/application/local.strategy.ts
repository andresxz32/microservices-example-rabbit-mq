import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthValidator } from "./AuthValidator";
import { Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private readonly _authValidator: AuthValidator) {
        super();
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this._authValidator.validateUser({ username, password });

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}