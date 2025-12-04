import { connect } from "http2";
import { prisma } from "../client/db/index.js";

class UserService {
    public static followers(from :string,to:string){
        return prisma.followes.create({
            data:{
                follower:{connect:{id:from}},
                following:{connect:{id:to}}
            }
        })
    }

    public static UnfollowUser(from:string,to:string){
       return prisma.followes.delete({
        where:{followerId_followingId:{followerId:from,followingId:to}}
       })
    }
}

export default UserService