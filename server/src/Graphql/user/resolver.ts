
import axios from "axios";
import { prisma } from "../../client/db/index.js";
import jwtServies from "../../services/jwt.js";

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
            PrfileImage: data.picture!
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
};

const mutation = {
  dummy: () => "This is just a placeholder mutation",
};

export const resolver = {
  Query: queries,
  Mutation: mutation
}
