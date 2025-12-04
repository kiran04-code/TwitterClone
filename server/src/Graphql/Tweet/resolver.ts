import { prisma } from "../../client/db/index.js"
import cloudinary from "../../config/cloudinery.js"
import type { Tweet } from "../../generated/prisma/client.js"
import type { GraphqlContext } from "../../interface.js"
interface tweetsdata {
    textContent:string,
    imageUrl?:string
}
const query = {
    getTweets:async(parent:any,{},{},ctx:GraphqlContext)=>{
      return await prisma.tweet.findMany({orderBy:{createdAt:"desc"}})  
    }
}
const mutation = {
 createTweet:async(parent:any,{payload}:{payload:tweetsdata},ctx:GraphqlContext)=>{
  let uploaderdImage :string | null = null
 if(payload.imageUrl){
   const {secure_url} = await cloudinary.uploader.upload(payload.imageUrl!,{resource_type:"image"})
    uploaderdImage = secure_url;
    console.log(secure_url)
 }
  if(!ctx.user?.id){
    throw new Error("You are Not authenticated")
  }
  const Tweet = await prisma.tweet.create({
    data:{
        textContent:payload.textContent!,
        imageUrl:uploaderdImage!,
        author:{connect:{id:ctx.user.id}}
    }
  })
  return Tweet;
 }
}
const extraResolver ={
Tweet:{
    author:async(parent:Tweet)=>{return await prisma.user.findUnique({where:{id:parent.authorId}})}
}
}
export const resolver = {
    query,
    mutation,
    extraResolver
}