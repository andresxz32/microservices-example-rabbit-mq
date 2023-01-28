import { Inject, Injectable, Logger, RequestTimeoutException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ClientProxy } from "@nestjs/microservices";
import { compareSync } from "bcrypt";
import { throwError, TimeoutError } from "rxjs";
import { catchError, timeout } from 'rxjs/operators'

@Injectable()
export class AuthValidator {
    constructor(
        @Inject('USER_SERVICE')
        private readonly _userMicroservice: ClientProxy,
        private readonly _jwtService: JwtService
    ) { }


    async validateUser({ username, password }: { username: string, password: string }): Promise<any> {
        try {
            const user = await this._userMicroservice.send({ role: 'user', cmd: 'get' }, { username })
                .pipe(
                    timeout(5000),
                    catchError(err => {
                        if (err instanceof TimeoutError) {
                            return throwError(new RequestTimeoutException());
                        }
                        return throwError(err);
                    }),)
                .toPromise();

            if (compareSync(password, user?.password)) {
                return user;
            }

            return null;
        } catch (e) {
            Logger.log(e);
            throw e;
        }
    }

    async login(user) {
        const payload = { user, sub: user.id };

        return {
            userId: user.id,
            accessToken: this._jwtService.sign(payload)
        };
    }
}