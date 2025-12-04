declare class UserService {
    static followers(from: string, to: string): import("../generated/prisma/models.js").Prisma__FollowesClient<{
        followerId: string;
        followingId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
    static UnfollowUser(from: string, to: string): import("../generated/prisma/models.js").Prisma__FollowesClient<{
        followerId: string;
        followingId: string;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../generated/prisma/internal/prismaNamespace.js").GlobalOmitConfig | undefined;
    }>;
}
export default UserService;
//# sourceMappingURL=user.d.ts.map