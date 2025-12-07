import { graphql } from "@/src/gql";

export const FollowUserQuery = graphql(`#graphql
    mutation followUserto($to:ID!){
      followUser(to:$to)

    } `)

export const unFollowUserQuery = graphql(`#graphql
    mutation UnfollowUserto($to:ID!){
      Unfollow(to:$to)

    } `)