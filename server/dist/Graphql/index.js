import { ApolloServer } from '@apollo/server';
import { User } from './user/index.js';
import { tweetsdata } from './Tweet/index.js';
async function InititApolloserver() {
    const server = new ApolloServer({
        typeDefs: `
    ${User.typeDefs}
    ${tweetsdata.typeDefs}
      type Query {
       ${User.query}
       ${tweetsdata.query}
      }

      type Mutation {
        ${User.mutation}
        ${tweetsdata.mutation}
      }
    `,
        resolvers: {
            Query: {
                ...User.resolver.Query,
                ...tweetsdata.resolver.query
            },
            Mutation: {
                ...User.resolver.Mutation,
                ...tweetsdata.resolver.mutation
            },
            ...tweetsdata.resolver.extraResolver,
            ...User.resolver.extraResolver2
        }
    });
    await server.start();
    return server;
}
export default InititApolloserver;
//# sourceMappingURL=index.js.map