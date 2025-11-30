import type { GraphqlContext } from "../../interface.js";
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
            PrfileImage: string;
            createAt: Date;
            updatedAt: Date;
        } | null>;
    };
    Mutation: {
        dummy: () => string;
    };
};
//# sourceMappingURL=resolver.d.ts.map