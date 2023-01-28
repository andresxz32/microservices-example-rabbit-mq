import { ConfigService } from "@nestjs/config";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(configService: ConfigService) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: 'yoursecret'
      });
    }
  
    async validate(payload) {
      return { id: payload.sub, user: payload.user};
    }
  }