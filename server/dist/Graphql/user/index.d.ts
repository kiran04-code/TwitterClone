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
        };
        Mutation: {
            dummy: () => string;
        };
        extraResolver2: {
            User: {
                tweets: (parent: import("../../generated/prisma/client.js").User) => Promise<{
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    textContent: string;
                    imageUrl: string | null;
                    authorId: string;
                }[]>;
            };
        };
    };
};
//# sourceMappingURL=index.d.ts.map