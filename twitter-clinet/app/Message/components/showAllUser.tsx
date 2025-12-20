
import { User } from '@/src/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
interface FollowingPgaes {
    users: User | null | undefined
    onClick: React.Dispatch<React.SetStateAction<boolean>>
}
const ShowAllUser: React.FC<FollowingPgaes> = ({ users, onClick }) => {
    const [usernames,setuser] = useState("")
    const  filterUser = users?.following?.filter((data)=>!usernames?.trim() ? true:data?.firstName.trim().toUpperCase() === usernames.trim().toUpperCase())
    console.log(filterUser)
    console.log(users)
    return (
        users && (
            <div
                className="fixed inset-0 bg-black/50 z-99 flex justify-center items-center p-4 "
                onClick={() => console.log("Backdrop clicked")}
            >
                <div
                    className="bg-[#000000] backdrop-blur-xl p-4 w-full max-w-md rounded-2xl shadow-xl border  border-gray-400"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className='flex justify-between items-center'>  <h1 className="text-2xl font-bold text-white mb-3"> New Messages</h1>
                        <button onClick={() => onClick(false)} className='cursor-pointer transition rounded-full p-2 hover:bg-[#222127]'><RxCross2 className='text-xl'/></button></div>
                    <input onChange={(e)=>setuser(e.target.value)} value={usernames} type="text" placeholder='Search name or username' className='text-white p-2 border border-blue-600 flex w-full rounded-xl mb-5 focus:outline-none' />
                    {
                        users.following && users.following.length > 0 ? <ul>
                            {
                                filterUser?.map((i, idx) => (
                                    <Link key={idx} href={`/Message/${i?.id}`} className='cursor-pointer  hover:bg-[#211f25]  p-2 rounded-2xl  transition flex gap-1'>
                                        <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-black">
                                            {i && i.profileImage && <Image
                                                src={i.profileImage || ""}
                                                width={350}
                                                height={350}
                                                alt="Profile Image"
                                                className='rounded-full  shadow-2xl'
                                            />}
                                        </div>
                                        <div>
                                            <p className='text-xl '>{i?.firstName} {i?.LastName} </p>
                                            <p className='text-[13px] text-gray-400 '>{i?.email}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </ul> : <div className="space-y-2 text-white"> <p>No following yet</p></div>
                    }
                </div>
            </div>
        )
    )
}




export default ShowAllUser
