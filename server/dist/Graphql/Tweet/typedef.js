export const typeDefs = `#graphql
input CreateTweetData {
  textContent: String!
  imageUrl: String
}
type Tweet {
    id:ID!,
    textContent: String!
    imageUrl: String
    author:User
}
`;
//# sourceMappingURL=typedef.js.map