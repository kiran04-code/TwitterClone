import type { user } from "../generated/prisma/client.js";
import JWT from "jsonwebtoken";
declare class jwtServies {
    static genrateToken(users: user): Promise<string>;
    static deocdToken(token: string | undefined): string | JWT.JwtPayload | undefined;
}
export default jwtServies;
//# sourceMappingURL=jwt.d.ts.map