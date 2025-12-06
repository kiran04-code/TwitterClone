import type { GraphqlContext } from "../../interface.js";
import { type user } from "../../generated/prisma/client.js";
export interface GoogleAuthPayload {
    iss?: string;
    azp?: string;
    aud?: string;
    sub?: string;
    hd?: string;
    email?: string | undefined;
    email_verified?: string;
    nbf?: string;
    name?: string;
    picture?: string;
    given_name?: string | undefined;
    family_name?: string;
    iat?: string;
    exp?: string;
    jti?: string;
    alg?: string;
    kid?: string;
    typ?: string;
}
export declare const resolver: {
    Query: {
        verifedGoogleToken: (parent: any, { token }: {
            token: string;
        }) => Promise<string | undefined>;
        getCurrentUser: (parent: any, arg: any, ctx: GraphqlContext) => Promise<{
            id: string;
            firstName: string;
            LastName: string | null;
            email: string;
            profileImage: string;
            createdAt: Date;
            updatedAt: Date;
        } | null>;
        getUserById: (parent: any, { id }: {
            id: string;
        }, ctx: GraphqlContext) => Promise<{
            id: string;
            firstName: string;
            LastName: string | null;
            email: string;
            profileImage: string;
            createdAt: Date;
            updatedAt: Date;
        } | null>;
    };
    Mutation: {
        followUser: (parent: any, { to }: {
            to: string;
        }, ctx: GraphqlContext) => Promise<boolean>;
        Unfollow: (parent: any, { to }: {
            to: string;
        }, ctx: GraphqlContext) => Promise<boolean>;
    };
    extraResolver2: {
        User: {
            tweets: (parent: user) => Promise<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                textContent: string;
                imageUrl: string | null;
                authorId: string;
            }[]>;
            follower: (parent: user) => Promise<{
                id: string;
                firstName: string;
                LastName: string | null;
                email: string;
                profileImage: string;
                createdAt: Date;
                updatedAt: Date;
            }[]>;
            following: (parent: user) => Promise<{
                id: string;
                firstName: string;
                LastName: string | null;
                email: string;
                profileImage: string;
                createdAt: Date;
                updatedAt: Date;
            }[]>;
        };
    };
};
//# sourceMappingURL=resolver.d.ts.map