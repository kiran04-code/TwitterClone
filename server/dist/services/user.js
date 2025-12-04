import { connect } from "http2";
import { prisma } from "../client/db/index.js";
class UserService {
    static followers(from, to) {
        return prisma.followes.create({
            data: {
                follower: { connect: { id: from } },
                following: { connect: { id: to } }
            }
        });
    }
    static UnfollowUser(from, to) {
        return prisma.followes.delete({
            where: { followerId_followingId: { followerId: from, followingId: to } }
        });
    }
}
export default UserService;
//# sourceMappingURL=user.js.map