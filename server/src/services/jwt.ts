import { prisma } from "../client/db/index.js";
import type { User } from "../generated/prisma/client.js";
import JWT from "jsonwebtoken"
import type { JwtTokenUser } from "../interface.js";
const jwtTokenkey = "kiranRathod147"
class jwtServies {
    static async genrateToken(users: User) {
        const payload: JwtTokenUser = {
            id: users?.id,
            email: users?.email
        }
        const token = JWT.sign(payload, jwtTokenkey)
        return token
    }
    public static deocdToken(token: string | undefined) {
        if (token) {
            const payload = JWT.verify(token, jwtTokenkey)
            return payload;
        }
    }
}

export default jwtServies