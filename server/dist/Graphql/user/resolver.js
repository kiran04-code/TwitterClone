const queries = {
    verifedGoogleToken: async (parent, { token }) => {
        return token;
    },
    name: () => "My First GraphQL Query Works 🚀",
};
const mutation = {
    dummy: () => "This is just a placeholder mutation",
};
export const resolver = {
    Query: queries,
    Mutation: mutation
};
//# sourceMappingURL=resolver.js.map