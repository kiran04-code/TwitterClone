"use"
import React, { useState } from 'react'

const Nav = () => {
      const [choice,setchoice] = useState(false)
    return (
    <div>
       <nav className='flex w-[600px] justify-evenly py-5 bg-black/20 backdrop-blur-md border-b border-gray-500 fixed top-0 left-1/2 -translate-x-1/2 z-[177]'>
       <div className='flex flex-col justify-center gap-3 items-center'>
         <button onClick={()=>setchoice(false)}>For You</button>
         {
          choice?null:<div className='w-20 h-1 bg-blue-400 rounded-3xl'></div>
         }
       </div>
        <div className='flex flex-col justify-center gap-3 items-center'>
          <button onClick={()=>setchoice(true)} >Following</button>
          {
          choice?<div className='w-20 h-1 bg-blue-400 rounded-3xl'></div>:null
         }
        </div>
      </nav>
    </div>
  )
}

export default Nav
