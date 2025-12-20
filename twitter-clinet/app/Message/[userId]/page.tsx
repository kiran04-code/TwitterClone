"use client"
import LeftSideNav from '@/components/LeftSide/leftSideNav'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import Middle from '../components/Middle'
import Right from '../components/Right'
import { useParams } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ChatBox from './components/ChatBox'

const Page = () => {
    const  {userId}  = useParams()

    const clinet = new QueryClient()
    return (
     <QueryClientProvider client={clinet}>
              <div>
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
                            border: 2,
                            borderColor: "white"
                        },
                    }}
                />

                <LeftSideNav />
                <Middle />
                <ChatBox id={userId} />
            </div>


        </div>
     </QueryClientProvider>
    )
}

export default Page
