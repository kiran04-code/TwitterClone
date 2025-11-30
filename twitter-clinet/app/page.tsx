"use client";
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
import { Geist } from 'next/font/google';
import LeftSideNav from '@/components/LeftSide/leftSideNav';
import RightsideFeed from '@/components/RightSide/RightsideFeed';
import Feeds from '@/components/Feed/Feeds';
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const page = () => {

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
  const queryclinet = new QueryClient()
  return (
    <QueryClientProvider client={queryclinet}>
      <div className={geistSans.className}>
      <div className='grid grid-cols-12 h-screen w-screen px-40 '>
        <Toaster
          position="top-left"
          toastOptions={{
            style: {
              background: "black",
              color: "white",
              fontFamily: "Inter, sans-serif", 
              fontSize: "14px",
              padding: "12px",
              borderRadius: "6px",
              border:2,
              borderColor:"white"
            },
          }}
        />
        <LeftSideNav/>
        <Feeds />
        <RightsideFeed />
      </div>
    </div>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default page
