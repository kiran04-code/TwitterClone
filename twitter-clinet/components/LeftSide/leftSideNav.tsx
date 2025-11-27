import React from 'react'
import { GoHome } from 'react-icons/go';
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
const LeftSideNav = () => {
    
      interface TwitterButtom {
        tittle: string
        icons: React.ReactNode
      }
    
      const AllIcons: TwitterButtom[] = [
        {
          tittle: "Home",
          icons: <GoHome />
        },
        {
          tittle: "Explore",
          icons: <CiSearch />
        },
        {
          tittle: "Notification",
          icons: <MdNotificationsNone />
        },
        {
          tittle: "Messages",
          icons: <FaFacebookMessenger />
        },
        {
          tittle: "Communtites",
          icons: <FaUserGroup />
        },
        {
          tittle: "BookMark",
          icons: <FaRegBookmark />
        },
        {
          tittle: "Profile",
          icons: <CiUser />
        },
        {
          tittle: "More",
          icons: <CiCircleMore />
        },
      ]
  return (
     <div className='col-span-3   py-3'>
             <div className='text-[35px] w-fit  hover:bg-gray-900 p-2 rounded-full transition  cursor-pointer'>
               <RiTwitterXLine className=' ' />
             </div>
             <div>
               <ul className=' flex flex-col gap-2 mt-3'>
                 {
                   AllIcons.map((item =>
                     <li key={item.tittle} className='flex  gap-3 items-center  hover:bg-[#2d2b30] cursor-pointer w-fit p-2 transition rounded-full '>
                       <span className=' px-1 text-[24px]'>{item.icons}</span>
                       <span className='text-[20px]'>{item.tittle}</span>
                     </li>
                   ))
                 }
               </ul>
               <div className='pt-2 flex justify-start px-2'>
                 <button className='bg-white w-55 p-4 font-bold text-black  rounded-full  cursor-pointer'>Post</button>
               </div>
               <div className='pt-4 flex gap-2 justify-start px-2 mt-3.5  hover:bg-[#2d2b30]  p-2 rounded-full transition'>
                 <div className='w-10 h-10 bg-amber-400 flex justify-center items-center rounded-full'>K</div>
                 <div>
                   <h1>KIRAN RATHOD</h1>
                   <p className='text-gray-500 px-[0.1px]'>@kiran.rathod24@vit.edu</p>
                 </div>
                 <CiCircleMore className='text-2xl  cursor-pointer' />
               </div>
             </div>
           </div>
  )
}

export default LeftSideNav
