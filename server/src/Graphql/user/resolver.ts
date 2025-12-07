
import axios from "axios";
import { prisma } from "../../client/db/index.js";
import jwtServies from "../../services/jwt.js";
import type { GraphqlContext } from "../../interface.js";
import { Prisma, type user } from "../../generated/prisma/client.js";
import UserService from "../../services/user.js";


export interface GoogleAuthPayload {
  iss?: string;               // issuer URL
  azp?: string;               // Authorized party
  aud?: string;               // audience (client id)
  sub?: string;               // user unique id
  hd?: string;               // hosted domain (optional)
  email?: string | undefined;             // user email
  email_verified?: string;    // "true" or "false" comes as string
  nbf?: string;               // not before (timestamp)
  name?: string;              // full name
  picture?: string;           // profile image URL
  given_name?: string | undefined;        // first name
  family_name?: string;       // last name
  iat?: string;               // issued at (timestamp)
  exp?: string;               // expiry (timestamp)
  jti?: string;               // JWT ID
  alg?: string;               // algorithm
  kid?: string;               // key id
  typ?: string;               // token type
}

const queries = {
  verifedGoogleToken: async (parent: any, { token }: { token: string }) => {
    try {
      const googletoken = token;
      const GoogleAuthUrl = new URL('https://oauth2.googleapis.com/tokeninfo')
      GoogleAuthUrl.searchParams.set('id_token', googletoken)
      const { data } = await axios.get<GoogleAuthPayload>(GoogleAuthUrl.toString(), {
        responseType: "json"
      })
      const users = await prisma.user.findUnique({ where: { email: data.email! } })
      if (!users) {
        await prisma.user.create({
          data: {
            firstName: data.given_name!,
            LastName: data.family_name!,
            email: data.email!,
            profileImage: data.picture!
          }
        })
      }
      const usertInDb = await prisma.user.findUnique({ where: { email: data.email! } })
      if (!usertInDb) throw new Error("User with email not found")
      const UserToken = await jwtServies.genrateToken(usertInDb)
      return UserToken
    } catch (error) {
      console.log("error", error)
    }
  },
  getCurrentUser: async (parent: any, arg: any, ctx: GraphqlContext) => {
    const Id = ctx.user?.id
    if (!Id) return null
    const UserData = await prisma.user.findUnique({ where: { id: Id } })
    return UserData
  },
  getUserById: async (parent: any, { id }: { id: string }, ctx: GraphqlContext) => {
    if (!ctx.user) throw new Error("Your is not Authenticated")
    const User = await prisma.user.findUnique({ where: { id: id } })
    return User
  }
};

const mutation = {
  followUser: async (parent: any, { to }: { to: string }, ctx: GraphqlContext) => {
    if (!ctx.user || !ctx.user.id) throw new Error("your are not authenticated")
    await UserService.followers(ctx.user.id, to)
    return true
  },
  Unfollow: async (parent: any, { to }: { to: string }, ctx: GraphqlContext) => {
    if (!ctx.user || !ctx.user.id) throw new Error("your are not authenticated")
    await UserService.UnfollowUser(ctx.user.id, to)
    return true
  },
};
const extraResolver2 = {
  User: {
    tweets: async (parent: user) => {
      return await prisma.tweet.findMany({ where: { authorId: parent.id } })
    },
    follower: async (parent: user) => {
      const result = await prisma.followes.findMany({
        where: { following: { id: parent.id } }, include: {
          follower: true,
          following: true
        }
      })
      return result.map(e => e.follower)
    },
    following: async (parent: user) => {
      const result = await prisma.followes.findMany({
        where: { follower: { id: parent.id } }, include: {
          follower: true,
          following: true
        }
      })
      return result.map(e => e.following)
    },
    recommendedUser: async (parent: user, _: any, ctx: GraphqlContext) => {
      if (!ctx.user) return []
      const following = await prisma.followes.findMany(
        {
          where:
          {
            follower:
              { id: ctx.user.id }
          },
          include:
            { following: { include: { follower: { include: { following: true } } } }, }
          ,
        })
      const userToRecommded: user[] = []
      for (const followings of following) {
        for (const followingpfFollowedUder of followings.following.follower) {
          if (followingpfFollowedUder.following.id !== ctx.user.id && following.findIndex(e => e.followingId === followingpfFollowedUder.following.id)) {
            userToRecommded.push(followingpfFollowedUder.following)
          }
        }
      }
      return userToRecommded;
    }
  }
}
export const resolver = {
  Query: queries,
  Mutation: mutation,
  extraResolver2
}
