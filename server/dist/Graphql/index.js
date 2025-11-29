import { ApolloServer } from '@apollo/server';
import { User } from './user/index.js';
;
async function InititApolloserver() {
    const server = new ApolloServer({
        typeDefs: ` 
     ${User.typeDefs}
   type Query {
        ${User.query}
      }
     type mutation{
     ${User.mutation}
     }
     `,
        resolvers: {
            Query: {
                ...User.resolver.Query
            },
            Mutation: {
                ...User.resolver.Mutation
            }
        }
    });
    await server.start();
    return server;
}
export default InititApolloserver;
//# sourceMappingURL=index.js.map