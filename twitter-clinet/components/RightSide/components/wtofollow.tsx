import React from 'react'
import { MdVerified } from "react-icons/md"
interface UserName {
    name: string,
    username: string
}
const Wtofollow = () => {
    const AllFollowers: UserName[] = [
        {
            name: "sachin tendulkar",
            username: "sachin_rt"
        },
        {
            name: "surya yadav",
            username: "surya_14kumar"
        },
        {
            name: "hardik pandya",
            username: "hardikpandya7"
        },
    ]
    return (
        <div className=' p-5 w-90  border-2 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-5 '>Who to Follow</h1>
            <ul className='flex flex-col gap-5'>
                {
                    AllFollowers.map(Iterator =>
                        <li key={Iterator.name} className=''>
                            <div className='flex  items-center justify-between'>
                                <div className='bg-orange-300 flex rounded-full p-3 px-5 font-semibold text-black justify-center items-center'>{Iterator.name.substring(0, 1)}</div>
                                <div className=' flex flex-col   '>
                                    <div className='flex  gap-2 items-center'>
                                        <h1>{Iterator.name}</h1><MdVerified className='text-blue-400' />
                                    </div>
                                    <p className='text-gray-600 '>@{Iterator.username}</p>
                                </div>
                                <div className='flex flex-col justify-center items-center '>
                                    <div className='bg-white cursor-pointer flex rounded-full px-4 py-2 font-semibold text-black justify-center items-center'>Follow</div>
                                </div>
                            </div>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Wtofollow
