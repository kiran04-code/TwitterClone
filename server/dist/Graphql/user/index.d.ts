export declare const User: {
    query: string;
    typeDefs: string;
    mutation: string;
    resolver: {
        Query: {
            verifedGoogleToken: (parent: any, { token }: {
                token: string;
            }) => Promise<string | undefined>;
        };
        Mutation: {
            dummy: () => string;
        };
    };
};
//# sourceMappingURL=index.d.ts.map