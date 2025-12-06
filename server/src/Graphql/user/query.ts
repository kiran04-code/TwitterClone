export const query = `#graphql
verifedGoogleToken(token:String!):String
getCurrentUser:User
getUserById(id:ID!):[User]
` 