"use client"
import LeftSideNav from '@/components/LeftSide/leftSideNav';
import RightsideFeed from '@/components/RightSide/RightsideFeed';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'
import { Toaster } from 'react-hot-toast';
import Right from './components/Right';
import Middle from './components/Middle';

const page = () => {

  const client  = new QueryClient()
  return <QueryClientProvider client={client}>
    <div className="md:grid md:grid-cols-12 grid grid-cols-12 h-screen w-screen md:px-40">
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

      <LeftSideNav />
      <Middle/>

        <Right />

    </div>
    </QueryClientProvider>;
  
}

export default page
