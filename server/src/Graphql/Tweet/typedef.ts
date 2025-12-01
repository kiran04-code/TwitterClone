export  const typeDefs = `#graphql
input cretaeTweetData {
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