import { graphql } from "../../src/gql";  // ✅ from generated client

export const VerifedUserGoogleTokenQuery = graphql(`
  #graphql
  query VerifedUserGoogleToken($token: String!) {
    verifedGoogleToken(token: $token)
  }
`);
