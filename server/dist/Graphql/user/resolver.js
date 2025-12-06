import axios from "axios";
import { prisma } from "../../client/db/index.js";
import jwtServies from "../../services/jwt.js";
import { Prisma } from "../../generated/prisma/client.js";
import UserService from "../../services/user.js";
const queries = {
    verifedGoogleToken: async (parent, { token }) => {
        try {
            const googletoken = token;
            const GoogleAuthUrl = new URL('https://oauth2.googleapis.com/tokeninfo');
            GoogleAuthUrl.searchParams.set('id_token', googletoken);
            const { data } = await axios.get(GoogleAuthUrl.toString(), {
                responseType: "json"
            });
            const users = await prisma.user.findUnique({ where: { email: data.email } });
            if (!users) {
                await prisma.user.create({
                    data: {
                        firstName: data.given_name,
                        LastName: data.family_name,
                        email: data.email,
                        profileImage: data.picture
                    }
                });
            }
            const usertInDb = await prisma.user.findUnique({ where: { email: data.email } });
            if (!usertInDb)
                throw new Error("User with email not found");
            const UserToken = await jwtServies.genrateToken(usertInDb);
            return UserToken;
        }
        catch (error) {
            console.log("error", error);
        }
    },
    getCurrentUser: async (parent, arg, ctx) => {
        const Id = ctx.user?.id;
        if (!Id)
            return null;
        const UserData = await prisma.user.findUnique({ where: { id: Id } });
        return UserData;
    },
    getUserById: async (parent, { id }, ctx) => {
        if (!ctx.user)
            throw new Error("Your is not Authenticated");
        const User = await prisma.user.findMany({ where: { id: id } });
        return User;
    }
};
const mutation = {
    followUser: async (parent, { to }, ctx) => {
        if (!ctx.user || !ctx.user.id)
            throw new Error("your are not authenticated");
        await UserService.followers(ctx.user.id, to);
        return true;
    },
    Unfollow: async (parent, { to }, ctx) => {
        if (!ctx.user || !ctx.user.id)
            throw new Error("your are not authenticated");
        await UserService.UnfollowUser(ctx.user.id, to);
        return true;
    },
};
const extraResolver2 = {
    User: {
        tweets: async (parent) => {
            return await prisma.tweet.findMany({ where: { authorId: parent.id } });
        },
        follower: async (parent) => {
            const result = await prisma.followes.findMany({
                where: { following: { id: parent.id } }, include: {
                    follower: true,
                    following: true
                }
            });
            return result.map(e => e.follower);
        },
        following: async (parent) => {
            const result = await prisma.followes.findMany({
                where: { follower: { id: parent.id } }, include: {
                    follower: true,
                    following: true
                }
            });
            return result.map(e => e.following);
        }
    }
};
export const resolver = {
    Query: queries,
    Mutation: mutation,
    extraResolver2
};
//# sourceMappingURL=resolver.js.map