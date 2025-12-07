"use client";

import LeftSideNav from "@/components/LeftSide/leftSideNav";
import RightsideFeed from "@/components/RightSide/RightsideFeed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());

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

     {children}
      <div className="md:flex hidden">
        <RightsideFeed />
      </div>
    </div>
    </QueryClientProvider>;
}
