
"use client"

import { UserById } from "@/hooks/user";
import React, { Suspense, useCallback, useMemo, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useCurrentUsert } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import Image from "next/image";
import Feeds from "@/components/Feed/Feeds";
import FollowerPage from "../Profile/components/FollowerPage";
import Followingpage from "../Profile/components/Followingpage";
import { CiCircleMore } from "react-icons/ci";
import toast from "react-hot-toast";
import { graphqlClient } from "@/ApiServer/api";
import { FollowUserQuery, unFollowUserQuery } from "@/graphql/mutation/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
const AllTwets = React.lazy(() => import("../Profile/components/TweetsAll"))

const UserPageClient = ({ id }: { id: string }) => {

    const { userInfo } = UserById(id)
    const { user: currentUser } = useCurrentUsert();
    const [buttonhover ,setbutton] = useState(false)
    const queryclient = useQueryClient()
    const amIFollowing = useMemo(() => {
        if (!userInfo) return false;
        return (currentUser?.following?.findIndex(el => el?.id === userInfo?.id)?? -1)>=0
    }, [userInfo,currentUser])
    console.log(amIFollowing)
    const router = useRouter();
    const [follwerShow, setFollerShow] = useState(false)
    const [follweingShow, setFollowingShow] = useState(false)
    const handleFollowButton = useCallback(async()=>{
     if(!id) return toast.error("user Not Found")
     await graphqlClient.request(FollowUserQuery,{to:id})
    queryclient.invalidateQueries(["getUserByID",id])
     toast.success("Now Your Following")
    },[])
    const handlunFollowButton = useCallback(async()=>{
     if(!id) return toast.error("user Not Found")
   const result =  await graphqlClient.request(unFollowUserQuery,{to:id})
if(result){
    queryclient.invalidateQueries(["getUserByID",id])
    toast.success("Now Your UnFollow to This User")
     }
    },[])
    return (
        <div onClick={() => { setFollerShow(false), setFollowingShow(false) }} className="md:col-span-6 col-span-6 overflow-auto border-l border-r border-gray-600 h-full w-full">
            {/* Top Section */}
            <div className="p-2 border-b border-gray-600 ">
                <div className="flex justify-between items-center text-xl">
                    <div className="flex gap-2 items-center">
                        <FaArrowLeft className="cursor-pointer" onClick={() => router.push("/")} />
                        <h1 className="font-bold">
                            {userInfo?.firstName} {userInfo?.LastName}
                        </h1>
                    </div>
                    <FaSearch />
                </div>
                <h1 className="px-10 text-gray-400 text-sm">{userInfo?.tweets?.length} posts</h1>
            </div>

            {/* Banner + Profile Image */}
            <div>
                <div className="relative w-full h-60 bg-[#252527] -z-10"></div>

                {/* Profile Image */}
                <div className="flex justify-between">
                    <div className="ml-6 w-40 h-40  z-99 rounded-full border-4 border-black -mt-20 overflow-hidden">
                        {userInfo?.profileImage ? (
                            <Image
                                src={userInfo.profileImage}
                                alt="Profile"
                                width={250}
                                height={250}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-4xl font-bold">
                                {userInfo?.firstName?.charAt(0) || "U"}
                            </div>
                        )}
                    </div>
                    <div className="px-5 py-3 flex gap-2 justify-center items-center">
                        <CiCircleMore className="text-4xl cursor-pointer " />
                       {
                        userInfo?.id === currentUser?.id ?null:<> {
                            amIFollowing ? <>{buttonhover ?<button onMouseLeave={()=>setbutton(false)} onClick={handlunFollowButton}  className="p-2 cursor-pointer   text-white bg-[#96060631] border-red-800 border-2 rounded-full font-bold">UnFollow</button>:<button onMouseEnter={()=>setbutton(true)} className="p-2 cursor-pointer  bg-black text-white border-amber-50 border-2 rounded-full font-bold">Follwing</button>}</>:
                                <button  onClick={handleFollowButton} className="p-2 cursor-pointer  bg-white text-black rounded-full font-bold">Follow</button>
                        }</>
                       }
                    </div>
                </div>
            </div>

            {/* User Details */}
            <div className="px-6 mt-4">
                <div className="flex gap-5  items-center"> <h1 className="text-2xl font-bold ">
                    {userInfo?.firstName} {userInfo?.LastName}
                </h1>
                    <span className="text-xl  border-2 rounded-4xl px-2 py-1 flex  items-center justify-between gap-2 "> <MdVerified className="text-blue-500 text-xl" />   get Verified</span>
                </div>
                <p className="text-gray-400 ">@{userInfo?.email.split("@")[0] || "username"}</p>
            </div>

            {/* Bottom Section */}
            <div className="px-6 py-3">
                <div className="text-gray-600 text-xl py-2 flex gap-2 items-center">
                    <FaCalendarAlt />
                    <p>Joined  November 2025</p>
                </div>
                <p>{userInfo?.follower?.length} <span className="text-gray-600 text-xl  hover:underline cursor-pointer" onClick={(e) => { e.stopPropagation(), setFollowingShow(false), setFollerShow(!follwerShow) }} >Follower</span>  {userInfo?.following?.length} <span className="text-gray-600 text-xl  hover:underline cursor-pointer  " onClick={(e) => { e.stopPropagation(), setFollerShow(false), setFollowingShow(!follweingShow) }}   >Following</span></p>
                {amIFollowing && (
                    <p className="text-lg mt-2 text-green-600 font-medium flex items-center gap-2">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                        You already follow {userInfo?.firstName} {userInfo?.LastName}.
                    </p>
                )}

            </div>
            <div className="px-7 mt-5 text-xl  w-full py-3 border-b-2 border-slate-500 ">
                <h1 className="underline underline-offset-11 decoration-4  decoration-blue-600">Posts</h1>
            </div>
            <div>
                <div className="px-0 h-[calc(100vh-380px)] overflow-y-auto">
                    <Suspense fallback={<div className="p-5 text-2xl">Loading...</div>}>
                        <AllTwets user={userInfo} />
                    </Suspense>
                </div>
            </div>
            {follwerShow ? <FollowerPage user={userInfo} /> : null}
            {follweingShow ? <Followingpage user={userInfo} /> : null}
        </div>
    );
};

export default UserPageClient;
