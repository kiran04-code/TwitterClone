/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "#graphql \n    query GetAllTweets{\n      getTweets{\n    id,\n    textContent,\n    imageUrl\n    author{\n      id\n      firstName\n      LastName\n      email\n      profileImage\n    }\n   }\n    }\n  ": typeof types.GetAllTweetsDocument,
    "#graphql \n    query GetUserById($id:ID!){\n      getUserById(id:$id) {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  ": typeof types.GetUserByIdDocument,
    "\n  #graphql\n  query VerifedUserGoogleToken($token: String!) {\n    verifedGoogleToken(token: $token)\n  }\n": typeof types.VerifedUserGoogleTokenDocument,
    "#graphql \n    query GetCurrentUser{\n      getCurrentUser {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  ": typeof types.GetCurrentUserDocument,
    "\n  #graphql\n mutation CreateUserTweet($payload:CreateTweetData!){\n    createTweet(payload:$payload){\n       id\n    textContent\n    imageUrl\n    }\n }\n": typeof types.CreateUserTweetDocument,
};
const documents: Documents = {
    "#graphql \n    query GetAllTweets{\n      getTweets{\n    id,\n    textContent,\n    imageUrl\n    author{\n      id\n      firstName\n      LastName\n      email\n      profileImage\n    }\n   }\n    }\n  ": types.GetAllTweetsDocument,
    "#graphql \n    query GetUserById($id:ID!){\n      getUserById(id:$id) {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  ": types.GetUserByIdDocument,
    "\n  #graphql\n  query VerifedUserGoogleToken($token: String!) {\n    verifedGoogleToken(token: $token)\n  }\n": types.VerifedUserGoogleTokenDocument,
    "#graphql \n    query GetCurrentUser{\n      getCurrentUser {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  ": types.GetCurrentUserDocument,
    "\n  #graphql\n mutation CreateUserTweet($payload:CreateTweetData!){\n    createTweet(payload:$payload){\n       id\n    textContent\n    imageUrl\n    }\n }\n": types.CreateUserTweetDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql \n    query GetAllTweets{\n      getTweets{\n    id,\n    textContent,\n    imageUrl\n    author{\n      id\n      firstName\n      LastName\n      email\n      profileImage\n    }\n   }\n    }\n  "): (typeof documents)["#graphql \n    query GetAllTweets{\n      getTweets{\n    id,\n    textContent,\n    imageUrl\n    author{\n      id\n      firstName\n      LastName\n      email\n      profileImage\n    }\n   }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql \n    query GetUserById($id:ID!){\n      getUserById(id:$id) {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  "): (typeof documents)["#graphql \n    query GetUserById($id:ID!){\n      getUserById(id:$id) {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query VerifedUserGoogleToken($token: String!) {\n    verifedGoogleToken(token: $token)\n  }\n"): (typeof documents)["\n  #graphql\n  query VerifedUserGoogleToken($token: String!) {\n    verifedGoogleToken(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "#graphql \n    query GetCurrentUser{\n      getCurrentUser {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  "): (typeof documents)["#graphql \n    query GetCurrentUser{\n      getCurrentUser {\n        id,\n        firstName,\n        LastName,\n        email,\n        profileImage,\n        tweets {\n             id\n             textContent\n             imageUrl\n    \n           }\n       follower{\n         firstName\n         LastName\n         email\n        profileImage\n         }\n      following{\n        firstName\n        LastName\n       email\n       profileImage\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n mutation CreateUserTweet($payload:CreateTweetData!){\n    createTweet(payload:$payload){\n       id\n    textContent\n    imageUrl\n    }\n }\n"): (typeof documents)["\n  #graphql\n mutation CreateUserTweet($payload:CreateTweetData!){\n    createTweet(payload:$payload){\n       id\n    textContent\n    imageUrl\n    }\n }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;