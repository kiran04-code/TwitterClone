import { graphqlClient } from "@/ApiServer/api"
import { getCurrentUserByIdQuery, getCurrentUserQuery } from "@/graphql/Query/user"
import { GetCurrentUserQuery, User } from "@/src/gql/graphql"
import { useQuery } from "@tanstack/react-query"

export const useCurrentUsert = () => {
    const query = useQuery<GetCurrentUserQuery>({
        queryKey: ["current-user"],
        queryFn: () => graphqlClient.request(getCurrentUserQuery)

    })
    return { ...query, user: query.data?.getCurrentUser }
}

export const UserById = (id: string) => {
    const query = useQuery({
        queryKey: ["getUserByID", id],
        queryFn:  async() => {
            const data = await  graphqlClient.request(getCurrentUserByIdQuery,{ id:id })

            return data.getUserById
        },
    })  
    return { ...query, userInfo:query.data}
}
