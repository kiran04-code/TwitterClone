import { prisma } from "../client/db/index.js";
import type { User } from "../generated/prisma/client.js";
import JWT   from "jsonwebtoken"
const jwtTokenkey = "kiranRathod147"
class jwtServies {
    static async genrateToken(users: User ) {
        const payload = {
            id:users?.id,
            email:users?.email
        }
        const token = JWT.sign(payload,jwtTokenkey)
       return token
    }
}

export default jwtServies