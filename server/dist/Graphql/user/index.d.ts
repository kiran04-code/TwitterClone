export declare const User: {
    query: string;
    typeDefs: string;
    mutation: {};
    resolver: {
        Query: {
            verifedGoogleToken: (parent: any, { token }: {
                token: string;
            }) => Promise<string>;
        };
        Mutation: {};
    };
};
//# sourceMappingURL=index.d.ts.map