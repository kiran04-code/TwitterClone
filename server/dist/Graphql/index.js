import { ApolloServer } from '@apollo/server';
import { prisma } from '../client/db/index.js';
async function InititApolloserver() {
    const server = new ApolloServer({
        typeDefs: ` 
     type Query {
      name:String
     }
     `,
        resolvers: {
            Query: {
                name: () => { return "Graphql is Wroking"; }
            }
        }
    });
    await server.start();
    return server;
}
export default InititApolloserver;
//# sourceMappingURL=index.js.map