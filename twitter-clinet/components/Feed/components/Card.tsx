import Image from 'next/image'
import React from 'react'
import { MdVerified } from "react-icons/md"
import { FaRegMessage } from "react-icons/fa6";
import { FiShare } from "react-icons/fi";
import { CiBookmark } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineBarChart } from "react-icons/ai";
const Card = () => {
    return (
        <div className="w-full flex flex-col border-b border-gray-700 p-4 gap-3 hover:bg-[#0b0b0f] ">


            <div className="flex items-center gap-3">

                <div className="bg-orange-400 rounded-full w-10 h-10 flex items-center justify-center font-bold text-black">
                    K
                </div>


                <div className="flex flex-col">
                    <div className="flex items-center gap-1 text-base font-semibold">
                        <h1 className="uppercase">KIRAN RATHOD</h1>
                        <MdVerified className="text-blue-400 text-lg" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <p>@kiran.dev</p>
                        <p>· 7h</p>
                    </div>
                </div>
            </div>

            <p className="text-gray-200 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut?
                Numquam dolorem nostrum suscipit in rerum architecto impedit necessitatibus quasi.
            </p>


            <div className="rounded-2xl overflow-hidden border border-gray-600">
                <Image
                    src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                    alt="post media"
                    className="w-full object-cover"
                    width={250}
                    height={250}
                />
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
    )
}

export default Card
