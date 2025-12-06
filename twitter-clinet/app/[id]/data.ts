import { graphqlClient } from "@/ApiServer/api"
import { getCurrentUserByIdQuery } from "@/graphql/Query/user"

export const GetUserById = async(id:string)=>{
 const data = await graphqlClient.request(getCurrentUserByIdQuery,{id})
 return data.getUserById;
}