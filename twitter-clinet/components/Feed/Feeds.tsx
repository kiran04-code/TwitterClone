"use client"
import React, { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import { useCurrentUsert } from '@/hooks/user'
import NewPost from './components/NewPost'

const Feeds = () => {
  const user = useCurrentUsert()
  return (
    <div className='col-span-6 overflow-auto  border-l-[0.2px] border-r-[0.2px] border-gray-500 h-full w-full   -red-400'>
      <Nav />

      <div className='mt-20'>
        {
          user && user.data?.getCurrentUser ? <> 
          <NewPost/>
            <Card />
            <Card /></> :
            <div className="flex w-full justify-center items-center h-screen py-10  ">
              <h1 className="font-extrabold text-center leading-15 tracking-tight px-6 py-4 max-w-3xl">

                <span className="text-gray-800 text-7xl  dark:text-gray-100">
                  Feed Starts!
                </span>
                <br />
                <span className="text-gray-800 text-5xl  dark:text-gray-100">
                  Build Now
                </span>

              </h1>
            </div>

        }
      </div>
    </div>
  )
}

export default Feeds
