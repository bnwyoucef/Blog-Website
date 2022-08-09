import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from "../constants";


export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExirations: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: any) {
        return {email: payload.email, id: payload.id}
    }
}