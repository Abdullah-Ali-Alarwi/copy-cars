import React from 'react'
import Headlines from "../home/headlines";

import GuessWork from './guesswork-area/GuessWork'
import Recommended from './guesswork-area/Recommended-for-you/Recommended'
import CustomerFedback from './Customer-Feedback/CustomerFedback'
import RecentTestDrives from './RecentTestDrives/RecentTestDrives'
import TopCities from './TopCities/TopCities'
import RandomAskedqQuestions from './RandomAskedqQuestions/RandomAskedqQuestions'
import Subscribe from './subscribe/subscribe'
import PopulerMakers from './PopulerMakers/PopulerMakers'

import SearchTabs from './search-tabs/SearchTabs'


export default function Home() {
  return (
    <div className='mt-[-30px]'>
  
    
        <Headlines />
      
       <GuessWork/>
       <Recommended/>
       {/* up the page  */}
        <SearchTabs/>
        
    <CustomerFedback />
    <RecentTestDrives/>
    <TopCities/>
    <RandomAskedqQuestions/>
    <Subscribe/>
    <PopulerMakers/>
 
  </div>
  
  )
}
