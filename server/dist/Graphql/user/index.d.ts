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
                PrfileImage: string;
                createAt: Date;
                updatedAt: Date;
            } | null>;
        };
        Mutation: {
            dummy: () => string;
        };
    };
};
//# sourceMappingURL=index.d.ts.map