"use client";
import React, { Suspense } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useCurrentUsert } from "@/hooks/user";
import { useRouter } from "next/navigation";
import { FaCalendarAlt } from "react-icons/fa"
import { MdVerified } from "react-icons/md"
import Image from "next/image";
import Feeds from "@/components/Feed/Feeds";
const AllTwets = React.lazy(()=>import ("./TweetsAll"))

const Profile = () => {
    const { user } = useCurrentUsert();
    const router = useRouter();

    return (
        <div className="md:col-span-6 col-span-6 overflow-auto border-l border-r border-gray-600 h-full w-full">
            {/* Top Section */}
            <div className="p-2 border-b border-gray-600 ">
                <div className="flex justify-between items-center text-xl">
                    <div className="flex gap-2 items-center">
                        <FaArrowLeft className="cursor-pointer" onClick={() => router.push("/")} />
                        <h1 className="font-bold">
                            {user?.firstName} {user?.LastName}
                        </h1>
                    </div>
                    <FaSearch />
                </div>
                <h1 className="px-10 text-gray-400 text-sm">{user?.tweets?.length} posts</h1>
            </div>

            {/* Banner + Profile Image */}
            <div>
                <div className="relative w-full h-60 bg-[#252527] -z-10"></div>

                {/* Profile Image */}
                <div className="ml-6 w-40 h-40 z-99 rounded-full border-4 border-black -mt-20 overflow-hidden">
                    {user?.profileImage ? (
                        <Image
                            src={user.profileImage}
                            alt="Profile"
                            width={250}
                            height={250}
                            className="object-cover w-full h-full"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center text-4xl font-bold">
                            {user?.firstName?.charAt(0) || "U"}
                        </div>
                    )}
                </div>
            </div>

            {/* User Details */}
            <div className="px-6 mt-4">
                <div className="flex gap-5  items-center"> <h1 className="text-2xl font-bold ">
                    {user?.firstName} {user?.LastName}
                </h1>
                    <span className="text-xl  border-2 rounded-4xl px-2 py-1 flex  items-center justify-between gap-2 "> <MdVerified className="text-blue-500 text-xl" />   get Verified</span>
                </div>
                <p className="text-gray-400 ">@{user?.email.split("@")[0] || "username"}</p>
            </div>

            {/* Bottom Section */}
            <div className="px-6 py-3">
                <div className="text-gray-600 text-xl py-2 flex gap-2 items-center">
                    <FaCalendarAlt />
                    <p>Joined  November 2025</p>
                </div>
                <p>1 <span className="text-gray-600 text-xl">Follower</span> 0 <span className="text-gray-600 text-xl">Followeres</span></p>
            </div>
            <div className="px-7 mt-5 text-xl  w-full py-3 border-b-2 border-slate-500 ">
                <h1 className="underline underline-offset-11 decoration-4  decoration-blue-600">Posts</h1>
            </div>
            <div>
                <div className="px-0 h-[calc(100vh-380px)] overflow-y-auto">
                    <Suspense fallback={<div className="p-5 text-2xl">Loading...</div>}>
                        <AllTwets />
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Profile;
