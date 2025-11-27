import React from 'react'
import { IoIosMore } from "react-icons/io";
interface Trendings {
    location: string,
    tag: string,
    category: string,
    place?: string,
    subTag?: string
    posts: string
}
const Whathapping = () => {

    const TrendingIndia: Trendings[] = [
        {
            location: "Trending in India",
            tag: "#Rashathadani",
            category: "Sports · Trending",
            place: "Ranchi",
            subTag: "#AnirudhaSrikkanth",
            posts: "8,833 posts"
        },
        {
            location: "Trending in India",
            tag: "#Ekaki",
            category: "Entertainment · Trending",
            subTag: "#DareYouToDeath",
            posts: "273K posts"
        }
    ]

    return (
        <div className=' p-5 w-90  border-2 border-gray-500 ml-5 mt-5 rounded-3xl'>
            <h1 className='text-2xl mb-2'>What  happing</h1>
            <ul className='flex flex-col gap-2'>
                {
                    TrendingIndia.map(Iterator =>
                        <li key={Iterator.tag}>
                            <div className='flex justify-between'>
                                <div >
                                <p className='text-[15px]'>{Iterator.category}</p>
                                <h1 className='text-gray-500'>{Iterator.tag}</h1>
                                <p>{Iterator.posts}</p>
                            </div>
                            <div className='hover:bg-gray-800 flex h-fit p-2 transition rounded-full cursor-pointer'>
                                <IoIosMore/>
                            </div>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default Whathapping
