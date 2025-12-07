import { connect } from "http2";
import { prisma } from "../client/db/index.js";
class UserService {
    static async followers(from, to) {
        return await prisma.followes.create({
            data: {
                follower: { connect: { id: from } },
                following: { connect: { id: to } }
            }
        });
    }
    static async UnfollowUser(from, to) {
        return await prisma.followes.delete({
            where: { followerId_followingId: { followerId: from, followingId: to } }
        });
    }
}
export default UserService;
//# sourceMappingURL=user.js.map