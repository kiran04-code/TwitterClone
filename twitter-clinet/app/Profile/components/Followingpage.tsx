import { useCurrentUsert } from '@/hooks/user'
import { User } from '@/src/gql/graphql'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
interface FollowingPgaes {
    user:User | null | undefined
}
const Followingpage:React.FC<FollowingPgaes> = ({user}) => {
    return (
        user && (
            <div
                className="fixed inset-0 bg-black/50 z-99 flex justify-center items-center p-4 z-50"
                onClick={() => console.log("Backdrop clicked")}
            >
                <div
                    className="bg-white/20 backdrop-blur-xl p-4 w-full max-w-md rounded-2xl shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1 className="text-2xl font-bold text-white mb-3">Following</h1>

                    {
                        user.following && user.following.length > 0 ? <ul>
                            {
                                user.following.map((i, idx) => (
                                    <Link key={idx} href={`/${i?.id}`}  className='cursor-pointer  hover:bg-gray-500  p-2 rounded-2xl  transition flex gap-1'>
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
                        </ul> :<div className="space-y-2 text-white"> <p>No following yet</p></div>
                    }
                </div>
            </div>
        )
    )
}




export default Followingpage
