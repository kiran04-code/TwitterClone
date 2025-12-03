import { graphql } from "../../src/gql";  // ✅ from generated client

export const VerifedUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifedUserGoogleToken($token: String!) {
    verifedGoogleToken(token: $token)
  }
`);

export const getCurrentUserQuery = graphql(
    `#graphql 
    query GetCurrentUser{
      getCurrentUser {
        id,
        firstName,
        LastName,
        email,
        profileImage,
      }
    }
  `
)