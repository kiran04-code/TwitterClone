const queries = {
  verifedGoogleToken: async (parent: any, { token }: { token: string }) => {
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
  }
