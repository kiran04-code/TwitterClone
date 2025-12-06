import { graphql } from "@/src/gql";


export const getAllTweetsQuery = graphql(
  `#graphql 
    query GetAllTweets{
      getTweets{
    id,
    textContent,
    imageUrl
    author{
      id
      firstName
      LastName
      email
      profileImage
    }
   }
    }
  `
)

