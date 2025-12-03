import { graphqlClient } from "@/ApiServer/api"
import { CreateTweetDocument } from "@/graphql/mutation/Tweets"
import { getAllTweetsQuery } from "@/graphql/Query/Tweet"
import { CreateTweetData } from "@/src/gql/graphql"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
export const CreateTweets = ()=>{
    const queryClinet = useQueryClient();

 const mutaion = useMutation({
    mutationFn:(payload:CreateTweetData)=>graphqlClient.request(CreateTweetDocument,{ payload }),
    onMutate:()=>toast.loading("Creating Tweet",{id:"1"}),
    onSuccess:async()=>{
      await queryClinet.invalidateQueries(["all-feed"])
        toast.success("Creating sucessfull",{id:"1"})
    }
 })
 return mutaion;
}
export const AllTwets = ()=>{
   const query = useQuery({
    queryKey:["all-feed"],
    queryFn:()=>graphqlClient.request(getAllTweetsQuery)
   })
   return {...query,tweets:query.data?.getTweets}
}