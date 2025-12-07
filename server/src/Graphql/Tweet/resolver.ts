import { prisma } from "../../client/db/index.js"
import { redisclient } from "../../client/redis/index.js"
import cloudinary from "../../config/cloudinery.js"
import type { Tweet } from "../../generated/prisma/client.js"
import type { GraphqlContext } from "../../interface.js"
interface tweetsdata {
  textContent: string,
  imageUrl?: string
}
const query = {
  getTweets: async (parent: any, { }, { }, ctx: GraphqlContext) => {
    const cachedkey = `AllTWITTES`
    const catchdata = await redisclient.get(cachedkey)
    if (catchdata) return JSON.parse(catchdata)
    const result = await prisma.tweet.findMany({ orderBy: { createdAt: "desc" } })
    await redisclient.set(cachedkey, JSON.stringify(result))
    return result;

  }
}
const mutation = {
  createTweet: async (parent: any, { payload }: { payload: tweetsdata }, ctx: GraphqlContext) => {
    let uploaderdImage: string | null = null
    const cachedkey = `AllTWITTES`
     const cachedkey2 =`RATE_LIMITE${ctx.user?.id}`;
     const ratelimited = await redisclient.get(cachedkey2)
     if(ratelimited) throw new Error("please wait...")
    if (payload.imageUrl) {
      const { secure_url } = await cloudinary.uploader.upload(payload.imageUrl!, { resource_type: "image" })
      uploaderdImage = secure_url;
    }
    if (!ctx.user?.id) {
      throw new Error("You are Not authenticated")
    }
    const Tweet = await prisma.tweet.create({
      data: {
        textContent: payload.textContent!,
        imageUrl: uploaderdImage!,
        author: { connect: { id: ctx.user.id } }
      }
    })
    await redisclient.setex(cachedkey2,10,1)
    await redisclient.del(cachedkey)
    return Tweet;
  }
}
const extraResolver = {
  Tweet: {
    author: async (parent: Tweet) => { return await prisma.user.findUnique({ where: { id: parent.authorId } }) }
  }
}
export const resolver = {
  query,
  mutation,
  extraResolver
}