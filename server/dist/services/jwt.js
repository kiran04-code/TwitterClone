import { prisma } from "../client/db/index.js";
import JWT from "jsonwebtoken";
const jwtTokenkey = "kiranRathod147";
class jwtServies {
    static async genrateToken(users) {
        const payload = {
            id: users?.id,
            email: users?.email
        };
        const token = JWT.sign(payload, jwtTokenkey);
        return token;
    }
}
export default jwtServies;
//# sourceMappingURL=jwt.js.map