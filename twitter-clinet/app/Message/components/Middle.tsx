import { useCurrentUsert } from '@/hooks/user'
import React, { useState } from 'react'

const Middle = () => {
    const [usernames,setNames] = useState("")
    const {user} = useCurrentUsert()
    console.log(user)
  return (
    <div className='col-span-4'>
        <h1 className='p-2 text-xl font-bold'>Chat</h1>
     <div className='p-2'> <input onChange={(e)=>setNames(e.target.value)} value={usernames} type="text" placeholder='Search name or username' className='text-white p-2 border border-blue-600 flex w-full rounded-xl mb-5 focus:outline-none' /></div>
     <div className='px-5 flex  gap-5'>
        <button className='bg-white text-xl rounded-full px-2 text-black'>All</button>
        <button className='px-2 border border-gray-400 rounded-full'>Request</button>
        </div>
    </div>
  )
}

export default Middle
