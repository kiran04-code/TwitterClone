export declare const resolver: {
    Query: {
        verifedGoogleToken: (parent: any, { token }: {
            token: string;
        }) => Promise<string>;
        name: () => string;
    };
    Mutation: {
        dummy: () => string;
    };
};
//# sourceMappingURL=resolver.d.ts.map