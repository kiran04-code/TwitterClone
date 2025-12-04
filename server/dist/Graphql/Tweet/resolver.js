import { prisma } from "../../client/db/index.js";
import cloudinary from "../../config/cloudinery.js";
const query = {
    getTweets: async (parent, {}, {}, ctx) => {
        return await prisma.tweet.findMany({ orderBy: { createdAt: "desc" } });
    }
};
const mutation = {
    createTweet: async (parent, { payload }, ctx) => {
        let uploaderdImage = null;
        if (payload.imageUrl) {
            const { secure_url } = await cloudinary.uploader.upload(payload.imageUrl, { resource_type: "image" });
            uploaderdImage = secure_url;
            console.log(secure_url);
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