declare class UserService {
    static followers(from: string, to: string): Promise<{
        followerId: string;
        followingId: string;
    }>;
    static UnfollowUser(from: string, to: string): Promise<{
        followerId: string;
        followingId: string;
    }>;
}
export default UserService;
//# sourceMappingURL=user.d.ts.map