import { UserById } from '@/hooks/user'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import toast from 'react-hot-toast';

import { FaArrowUp } from "react-icons/fa";
interface Props {
    id: string
}
const ChatBox = ({ id }: Props) => {
    const { userInfo } = UserById(id)
    const router = useRouter()
    const [Message, setMessga] = useState("")

    const hanadelMesseageSend = useCallback(async()=>{
        console.log(Message)
         setMessga("")
    },[Message])
    return (
        <div className='col-span-5 w-165 justify-between  border-l-2 border-gray-700 flex flex-col p-3'>
            <div>
                <div className='flex px-5 w-full mt-5'>
                    <div className='  flex px-5 py-2 items-center  w-full h-17 rounded-full gap-5  bg-black border border-gray-400'>
                        <div className='w-9 h-9 border border-white p-1 rounded-full '>
                            <Image className='w-full h-full rounded-full' src={userInfo?.profileImage || ""} width={250} height={250} alt='' />
                        </div>
                        <div>
                            <h1>{userInfo?.firstName} {userInfo?.LastName}</h1>
                            <p className='text-gray-500'>{userInfo?.email}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full h-50 flex mt-5 flex-col gap-2 justify-center items-center'>

                    <div className='w-15 h-15 border flex  justify-center items-center border-white p-1 rounded-full '>
                        <Image className='w-full h-full rounded-full' src={userInfo?.profileImage || ""} width={250} height={250} alt='' />
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h1>{userInfo?.firstName} {userInfo?.LastName}</h1>
                        <p className='text-gray-500'>{userInfo?.email}</p>
                    </div>
                    <button onClick={() => router.push(`/${userInfo?.id}`)} className='bg-white cursor-pointer text-black font-bold p-2 rounded-full'>View Profile</button>
                </div>

            </div>
            <div className='bg-black w-full flex gap-2 h-17 rounded-full p-4'>

                <input value={Message} onChange={(e) => setMessga(e.target.value)} type="text" placeholder='Enter Your Message' className=' border border-gray-400 rounded-xl p-2 w-full focus:outline-none' />
                {
                    Message ? <button type='button' onClick={hanadelMesseageSend} className='bg-blue-500 rounded-full p-3 cursor-pointer flex justify-center crsor-pointe items-center'><FaArrowUp /></button> : null
                }
            </div>
        </div>
    )
}

export default ChatBox
