import React from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className='flex mt-2 relative ml-5'>
        <CiSearch className='absolute text-2xl top-2 right-57 text-[#8d8b92]'/>
      <input placeholder='Search' className='px-15 py-2 border-2 rounded-full   border-[#4d4a55] focus:outline-none'/>
    </div>
  )
}

export default SearchBar
