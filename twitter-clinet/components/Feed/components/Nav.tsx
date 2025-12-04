"use client";
import React, { useState } from "react";

const Nav = () => {
  const [choice, setChoice] = useState(false);

  return (
    <nav
      className="
        flex 
        justify-evenly 
        items-center 
        py-4 
        bg-black/20 
        backdrop-blur-md 
        border-b border-gray-500 
        fixed top-0 left-1/2 -translate-x-1/2 
        z-[177] 
        w-full 
        md:w-[600px]
      "
    >
      {/* For You */}
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <button onClick={() => setChoice(false)} className="text-white text-sm md:text-base">
          For You
        </button>
        {!choice && (
          <div className="w-16 md:w-20 h-[3px] bg-blue-400 rounded-xl transition-all duration-300"></div>
        )}
      </div>

      {/* Following */}
      <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
        <button onClick={() => setChoice(true)} className="text-white text-sm md:text-base">
          Following
        </button>
        {choice && (
          <div className="w-16 md:w-20 h-[3px] bg-blue-400 rounded-xl transition-all duration-300"></div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
