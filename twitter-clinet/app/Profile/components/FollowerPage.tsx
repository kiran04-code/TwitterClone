import { useCurrentUsert } from '@/hooks/user'
import Image from 'next/image'
import React from 'react'

const FollowerPage = () => {
    const { user } = useCurrentUsert()

    return (
        user && (
            <div
                className="fixed inset-0 bg-black/50 flex justify-center items-center p-4 z-50"
                onClick={() => console.log("Backdrop clicked")}
            >
                <div
                    className="bg-white/20 backdrop-blur-xl p-4 w-full max-w-md rounded-2xl shadow-xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <h1 className="text-2xl font-bold text-white mb-3">Followers</h1>

                    {
                        user.follower ? <ul>
                            {
                                user.follower.map((i, idx) => (
                                    <li key={idx} className='cursor-pointer  hover:bg-gray-500  p-2 rounded-2xl  transition flex gap-1'>
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
                                    </li>
                                ))
                            }
                        </ul> :
                            <div className="space-y-2 text-white">
                                <p>No followers yet</p>
                            </div>
                    }
                </div>
            </div>
        )
    )
}

export default FollowerPage

