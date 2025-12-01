import { prisma } from "../../client/db/index.js";
const query = {
    getTweets: async (parent, {}, {}, ctx) => {
        return await prisma.tweet.findMany({ orderBy: { createdAt: "desc" } });
    }
};
const mutation = {
    createTweet: async (parent, { payload }, ctx) => {
        if (!ctx.user?.id) {
            throw new Error("You are Not authenticated");
        }
        const Tweet = await prisma.tweet.create({
            data: {
                textContent: payload.textContent,
                imageUrl: payload.imageUrl,
                author: { connect: { id: ctx.user.id } }
            }
        });
        return Tweet;
    }
};
const extraResolver = {
    Tweet: {
        author: async (parent) => { return await prisma.user.findUnique({ where: { id: parent.authorId } }); }
    }
};
export const resolver = {
    query,
    mutation,
    extraResolver
};
//# sourceMappingURL=resolver.js.map