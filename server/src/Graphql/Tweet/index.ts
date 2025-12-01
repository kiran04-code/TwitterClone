import { mutation } from "./mutation.js";
import  { query } from "./query.js";

import { resolver } from "./resolver.js";
import { typeDefs } from "./typedef.js";
interface TweetData {
    typeDefs: typeof typeDefs;
    mutation: typeof mutation;
    resolver: typeof resolver;
    query: typeof query
}
export const tweetsdata: TweetData = { typeDefs, mutation, resolver, query}