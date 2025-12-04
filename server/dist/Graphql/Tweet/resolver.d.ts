import type { Tweet } from "../../generated/prisma/client.js";
import type { GraphqlContext } from "../../interface.js";
interface tweetsdata {
    textContent: string;
    imageUrl?: string;
}
export declare const resolver: {
    query: {
        getTweets: (parent: any, {}: {}, {}: {}, ctx: GraphqlContext) => Promise<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            textContent: string;
            imageUrl: string | null;
            authorId: string;
        }[]>;
    };
    mutation: {
        createTweet: (parent: any, { payload }: {
            payload: tweetsdata;
        }, ctx: GraphqlContext) => Promise<{
            id: string;
            createdAt: Date;
            updatedAt: Date;
            textContent: string;
            imageUrl: string | null;
            authorId: string;
        }>;
    };
    extraResolver: {
        Tweet: {
            author: (parent: Tweet) => Promise<{
                id: string;
                firstName: string;
                LastName: string | null;
                email: string;
                profileImage: string;
                createdAt: Date;
                updatedAt: Date;
            } | null>;
        };
    };
};
export {};
//# sourceMappingURL=resolver.d.ts.map