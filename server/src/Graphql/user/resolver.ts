const queries = {
  verifedGoogleToken: async (parent: any, { token }: { token: string }) => {
    return token;
  }
};

const mutation = {};  // keep empty if you want

export const resolver = {
  Query: queries,        
  Mutation: mutation   }
