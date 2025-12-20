import Followingpage from '@/app/Profile/components/Followingpage'
import { useCurrentUsert } from '@/hooks/user'
import React, { useState } from 'react'
import { FaMailBulk } from "react-icons/fa"
import ShowAllUser from './showAllUser'

const Right = () => {
    const [showmember,setshowmember] = useState(false)
    const {user} = useCurrentUsert()
  return (
    <div  className='col-span-5  border-l-2 border-gray-700 flex gap-3  justify-center items-center flex-col p-5 relative  '>
      <FaMailBulk className='text-8xl rounded-4xl bg-gray-800 p-5'/>
      <h1 className='text-xl font-bold'>Start Conversation</h1>
      <p className='text-gray-500'>Choose from your existing conversations, or start a new one.</p>
      <button  onClick={()=>setshowmember(!showmember)} className='text-black p-2 bg-white rounded-full font-bold'>New Chat</button>
       { showmember ?<ShowAllUser users={user} onClick={setshowmember}  /> :null}
    </div>
  )
}

export default Right
