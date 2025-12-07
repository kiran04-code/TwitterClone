export declare const User: {
    query: string;
    typeDefs: string;
    mutation: string;
    resolver: {
        Query: {
            verifedGoogleToken: (parent: any, { token }: {
                token: string;
            }) => Promise<string | undefined>;
            getCurrentUser: (parent: any, arg: any, ctx: import("../../interface.js").GraphqlContext) => Promise<{
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
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<{
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
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<boolean>;
            Unfollow: (parent: any, { to }: {
                to: string;
            }, ctx: import("../../interface.js").GraphqlContext) => Promise<boolean>;
        };
        extraResolver2: {
            User: {
                tweets: (parent: import("../../generated/prisma/client.js").user) => Promise<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    textContent: string;
                    imageUrl: string | null;
                    authorId: string;
                }[]>;
                follower: (parent: import("../../generated/prisma/client.js").user) => Promise<{
                    id: string;
                    firstName: string;
                    LastName: string | null;
                    email: string;
                    profileImage: string;
                    createdAt: Date;
                    updatedAt: Date;
                }[]>;
                following: (parent: import("../../generated/prisma/client.js").user) => Promise<{
                    id: string;
                    firstName: string;
                    LastName: string | null;
                    email: string;
                    profileImage: string;
                    createdAt: Date;
                    updatedAt: Date;
                }[]>;
                recommendedUser: (parent: import("../../generated/prisma/client.js").user, _: any, ctx: import("../../interface.js").GraphqlContext) => Promise<{
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
};
//# sourceMappingURL=index.d.ts.map