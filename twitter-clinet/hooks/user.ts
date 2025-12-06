import { graphqlClient } from "@/ApiServer/api"
import { getCurrentUserByIdQuery, getCurrentUserQuery } from "@/graphql/Query/user"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUsert = () => {
    const query = useQuery({
          queryKey:["current-user"],
          queryFn:()=> graphqlClient.request(getCurrentUserQuery)
          
    })
    return {...query,user:query.data?.getCurrentUser}
}


