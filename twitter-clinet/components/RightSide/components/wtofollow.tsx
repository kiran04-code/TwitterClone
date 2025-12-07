import { useCurrentUsert } from '@/hooks/user'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdVerified } from "react-icons/md"
interface UserName {
    name: string,
    username: string
}
const Wtofollow = () => {
    const {user}  = useCurrentUsert()
  const routes =  useRouter()
    return (
        <div className=' p-5 0  border-2 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-5 '>Your May you Know</h1>
            <ul className='flex flex-col gap-5'>
                {
                    user?.recommendedUser?.map(Iterator =>
                        <li key={Iterator?.id} className=''>
                            <div className='flex  items-center justify-between'>
                                   <div className="rounded-full w-10 h-10 flex items-center justify-center font-bold text-black">
                                                             <Image
                                                                   src={Iterator?.profileImage || ""}
                                                                   width={350}
                                                                   height={350}
                                                                   alt="Profile Image"
                                                                   className='rounded-full  shadow-2xl'
                                                               />
                                                           </div>
                                <div className=' flex flex-col   '>
                                    <div className='flex  gap-2 items-center'>
                                        <h1>{Iterator?.firstName} {Iterator?.LastName}  </h1><MdVerified className='text-blue-400' />
                                    </div>
                                    <p className='text-gray-600 '>@{Iterator?.email.split("@")[0]}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <div className='bg-white cursor-pointer flex rounded-full px-4 py-2 font-semibold text-black justify-center items-center' onClick={()=>routes.push(`${Iterator?.id}`)}>View</div>
                                </div>
                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Wtofollow
