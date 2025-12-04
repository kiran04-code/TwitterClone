"use client"
import React from "react";
import LeftSideNav from "@/components/LeftSide/leftSideNav";
import RightsideFeed from "@/components/RightSide/RightsideFeed";
import { Toaster } from "react-hot-toast";
import Profile from "./components/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const page = () => {
  const queryclinet = new QueryClient()
  return (
   <QueryClientProvider client={queryclinet}>
     <div className="md:grid md:grid-cols-12 grid grid-cols-12 h-screen w-screen md:px-40">
      <Toaster />

      <LeftSideNav />

      <Profile />
      <div className="md:flex hidden">
        <RightsideFeed />
      </div>
    </div>
   </QueryClientProvider>
  );
};

export default page;

