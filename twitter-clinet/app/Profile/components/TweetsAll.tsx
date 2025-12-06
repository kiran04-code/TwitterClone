import { useCurrentUsert } from '@/hooks/user'
import Image from 'next/image';
import React from 'react'
import { MdVerified } from "react-icons/md"
import { FaRegMessage } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai"; import { User } from '@/src/gql/graphql';
;
interface TweetProps {
    user: User | null | undefined
}
const TweetsAll: React.FC<TweetProps> = ({ user }) => {

    return (
        <div>
            {
                user?.tweets?.map((i) => (
                    <div key={i?.id} className="w-full flex flex-col border-b border-gray-700 p-4 gap-3 hover:bg-[#0b0b0f] ">


                        <div className="flex items-center gap-3">

                            <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-black">
                                {i && user && <Image
                                    src={user?.profileImage || ""}
                                    width={450}
                                    height={450}
                                    alt="Profile Image"
                                    className='rounded-full  shadow-2xl'
                                />}
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-center gap-1 text-base font-semibold">
                                    <h1 className="uppercase">{user?.firstName} {user?.LastName}</h1>
                                    <MdVerified className="text-blue-400 text-lg" />
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <p>@{user?.email}</p>
                                    <p>· 7h</p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-200 text-sm leading-relaxed">
                            {i?.textContent}
                        </p>


                        <div className="rounded-2xl h-100 overflow-hidden border border-gray-600">
                            {
                                i?.imageUrl && <Image
                                    src={i?.imageUrl}
                                    alt="post media"
                                    className="w-full object-cover"
                                    width={250}
                                    height={250}
                                />
                            }
                        </div>


                        <div className="flex text-[15px] justify-between text-gray-500 text-sm px-2">
                            <p className='flex justify-center items-center cursor-pointer gap-2'><FaRegMessage /> 12</p>
                            <p className='text-[15px] flex justify-center cursor-pointer  gap-2 items-center'><FaRetweet /> 4</p>
                            <p className='text-[26px] cursor-pointer flex justify-center  gap-2 items-center '><GiSelfLove className='hover:text-pink-500 hover:bg-pink-950 p-1 rounded-full transition ' /> <p className='hover:text-pink-500 text-[16px] bg- rounded-full transition'>32</p></p>
                            <p className='text-[16px] flex justify-center cursor-pointer  gap-2 items-center'><AiOutlineBarChart /> 1.2K</p>
                            <p className='text-[16px] flex justify-center cursor-pointer  gap-2 items-center'><CiBookmark /> 1.K</p>
                            <p className='text-[15px] flex justify-center cursor-pointer gap-2 items-center'><FiShare />  </p>
                        </div>

                    </div>
                ))
            }
        </div>
    )
}

export default TweetsAll
