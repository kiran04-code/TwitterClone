const queries = {
    verifedGoogleToken: async (parent, { token }) => {
        return token;
    }
};
const mutation = {}; // keep empty if you want
export const resolver = {
    Query: queries,
    Mutation: mutation
};
//# sourceMappingURL=resolver.js.map