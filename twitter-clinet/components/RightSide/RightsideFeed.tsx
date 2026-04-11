import "dotenv/config";
import React from 'react'
import SearchBar from './components/SearchBar'
import Wtofollow from './components/wtofollow'
import Whathapping from './components/Whathapping'
import Terms from './components/Terms'
import LoginLeft from '../LoginFroms/LoginLeft'
import { useCurrentUsert } from '@/hooks/user'

const RightsideFeed = () => {
   const user = useCurrentUsert()
   const Api_key = process.env.RIGHTSIDEFEED_HIGH_ENTROPY_VALUE
   return (
      <div className='col-span-3'>
         <SearchBar />
         {
            user.data?.getCurrentUser ?<>
               <Wtofollow />
               <Whathapping /></> : <LoginLeft />
         }

         <div className='pl-7'>
            <Terms />
         </div>
      </div>
   )
}

export default RightsideFeed

