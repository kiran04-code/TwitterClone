"use client"
import React, { useState } from 'react'
import Nav from './components/Nav'
import Card from './components/Card'
import { useCurrentUsert } from '@/hooks/user'

const Feeds = () => {
  const user = useCurrentUsert()
  return (
    <div className='col-span-6 overflow-auto  border-l-[0.2px] border-r-[0.2px] border-gray-500 h-full w-full   -red-400'>
     <Nav/>
    <div className='mt-20'>
      {
        user && user.data?.getCurrentUser && <> <Card/>
     <Card/>
     <Card/></>
      }
    </div>
    </div>
  )
}

export default Feeds
