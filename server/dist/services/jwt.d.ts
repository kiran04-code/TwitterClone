import type { User } from "../generated/prisma/client.js";
declare class jwtServies {
    static genrateToken(users: User): Promise<string>;
}
export default jwtServies;
//# sourceMappingURL=jwt.d.ts.map