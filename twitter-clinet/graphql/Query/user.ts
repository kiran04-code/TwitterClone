import { graphql } from "../../src/gql";  // ✅ from generated client
export const getCurrentUserByIdQuery = graphql(
  `#graphql 
    query GetUserById($id:ID!){
      getUserById(id:$id) {
        id,
        firstName,
        LastName,
        email,
        profileImage,
        tweets {
             id
             textContent
             imageUrl
    
           }
       follower{
        id
         firstName
         LastName
         email
        profileImage
         }
      following{
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
        tweets {
             id
             textContent
             imageUrl
    
           }
       follower{
        id      
           firstName
         LastName
         email
        profileImage
         }
      following{
        id
        firstName
        LastName
       email
       profileImage
        }
    recommendedUser{
        id
     
    }
         sender {
      receiver {
        id,
    
      }
      text
    }
     receiver {
      text
      sender {
        id,
        email,
        LastName,
        firstName
      }
    }
      }
    }
  `
)

