import React from 'react'
import SearchBar from './components/SearchBar'
import Wtofollow from './components/wtofollow'
import Whathapping from './components/Whathapping'
import Terms from './components/Terms'

const RightsideFeed = () => {
  return (
     <div className='col-span-3'>
        <SearchBar/>
        <Wtofollow/>
        <Whathapping/>
        <div className='pl-7'>
            <Terms/>
            </div>
     </div>
  )
}

export default RightsideFeed
