import React, { useState } from 'react'
import { GoHome } from 'react-icons/go';
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookMessenger } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { MdNotificationsNone } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { CiCircleMore } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa6";
import { useCurrentUsert } from '@/hooks/user';
import Image from 'next/image';
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
  const user = useCurrentUsert()
  const [clicktrue, setclickTrue] = useState(false)
  const handlelogut = () =>{
    window.localStorage.removeItem("__twitter_token")
    window.location.reload()
  }
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
        {
          user&&user.data?.getCurrentUser&& <div className='pt-4 flex gap-2 justify-start px-2 mt-3.5  hover:bg-[#2d2b30]  p-2 rounded-full transition relative'>
            {
              clicktrue ? <div

                className="absolute bottom-15 w-67 p-3 bg-black border-2 rounded-3xl border-gray-400 hover:scale-105 transition"
              >
                <h1 className="text-white text-base font-semibold">
                  Name: {user.data?.getCurrentUser?.firstName} {user.data?.getCurrentUser?.LastName}
                </h1>


                <button onClick={handlelogut} className=' cursor-pointer text-[13px] hover:bg-white rounded-2xl p-1 hover:text-black   text-nowrap mt-1 font-semibold flex justify-center items-center rounded-xl '>Log out {user.data?.getCurrentUser?.email}</button>
              </div> : null
            }
            <div className='pt-2 flex justify-start px-2' > <div

              className="w-10 h-10 bg-amber-400 mr-2 flex justify-center items-center rounded-full cursor-pointer"
            >
             {user && user.data?.getCurrentUser?.profileImage &&<Image
                src={user.data?.getCurrentUser?.profileImage || ""}
                width={250}
                height={250}
                alt="Profile Image"
                className='rounded-full  shadow-2xl'
              />
}
            </div>
              <div>
                <h1 className="text-white font-semibold">
                  {user.data?.getCurrentUser?.firstName} {user.data?.getCurrentUser?.LastName}
                </h1>
                <p className="text-gray-500 text-sm">@{user.data?.getCurrentUser?.email}</p>
              </div>
              <CiCircleMore
                onClick={() => setclickTrue(!clicktrue)}
                className="text-2xl text-white cursor-pointer"
              />
            </div></div>
        }
      </div>
    </div >
  )
}

export default LeftSideNav
