export const typeDefs = `#graphql
type User {
 id:ID!
 firstName:String!
 LastName:String
 email:String!
 profileImage:String
 tweets:[Tweet]
 follower:[User]
 following:[User]
}
`;
//# sourceMappingURL=typedef.js.map