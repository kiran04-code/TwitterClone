import React from 'react'
import SearchBar from './components/SearchBar'
import Wtofollow from './components/wtofollow'
import Whathapping from './components/Whathapping'
import Terms from './components/Terms'
import LoginLeft from '../LoginFroms/LoginLeft'

const RightsideFeed = () => {
  return (
     <div className='col-span-3'>
        <SearchBar/>
        {/* <Wtofollow/>
        <Whathapping/> */}
        <LoginLeft/>
        <div className='pl-7'>
            <Terms/>
            </div>
     </div>
  )
}

export default RightsideFeed
