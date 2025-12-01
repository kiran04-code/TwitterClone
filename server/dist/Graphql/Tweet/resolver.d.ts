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
            textContent: string;
            imageUrl: string | null;
            authorId: string;
            createdAt: Date;
            updatedAt: Date;
        }[]>;
    };
    mutation: {
        createTweet: (parent: any, { payload }: {
            payload: tweetsdata;
        }, ctx: GraphqlContext) => Promise<{
            id: string;
            textContent: string;
            imageUrl: string | null;
            authorId: string;
            createdAt: Date;
            updatedAt: Date;
        }>;
    };
    extraResolver: {
        Tweet: {
            author: (parent: Tweet) => Promise<{
                id: string;
                createdAt: Date;
                updatedAt: Date;
                email: string;
                firstName: string;
                LastName: string | null;
                profileImage: string;
            } | null>;
        };
    };
};
export {};
//# sourceMappingURL=resolver.d.ts.map