import axios from "axios";
import { prisma } from "../../client/db/index.js";
import jwtServies from "../../services/jwt.js";
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
                        PrfileImage: data.picture
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
    }
};
const mutation = {
    dummy: () => "This is just a placeholder mutation",
};
export const resolver = {
    Query: queries,
    Mutation: mutation
};
//# sourceMappingURL=resolver.js.map