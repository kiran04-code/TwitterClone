import { prisma } from "../../client/db/index.js";
import { redisclient } from "../../client/redis/index.js";
import cloudinary from "../../config/cloudinery.js";
const query = {
    getTweets: async (parent, {}, {}, ctx) => {
        const cachedkey = `AllTWITTES`;
        const catchdata = await redisclient.get(cachedkey);
        if (catchdata)
            return JSON.parse(catchdata);
        const result = await prisma.tweet.findMany({ orderBy: { createdAt: "desc" } });
        await redisclient.set(cachedkey, JSON.stringify(result));
        return result;
    }
};
const mutation = {
    createTweet: async (parent, { payload }, ctx) => {
        let uploaderdImage = null;
        const cachedkey = `AllTWITTES`;
        const cachedkey2 = `RATE_LIMITE${ctx.user?.id}`;
        const ratelimited = await redisclient.get(cachedkey2);
        if (ratelimited)
            throw new Error("please wait...");
        if (payload.imageUrl) {
            const { secure_url } = await cloudinary.uploader.upload(payload.imageUrl, { resource_type: "image" });
            uploaderdImage = secure_url;
        }
        if (!ctx.user?.id) {
            throw new Error("You are Not authenticated");
        }
        const Tweet = await prisma.tweet.create({
            data: {
                textContent: payload.textContent,
                imageUrl: uploaderdImage,
                author: { connect: { id: ctx.user.id } }
            }
        });
        await redisclient.setex(cachedkey2, 10, 1);
        await redisclient.del(cachedkey);
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