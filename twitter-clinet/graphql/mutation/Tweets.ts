import { graphql } from "@/src/gql";

export const CreateTweetDocument = graphql(`
  #graphql
 mutation CreateUserTweet($payload:CreateTweetData!){
    createTweet(payload:$payload){
       id
    textContent
    imageUrl
    }
 }
`)