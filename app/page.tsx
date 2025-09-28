import React from 'react'
import Headlines from "@/app/home/headlines";

import GuessWork from '@/app/home/guesswork-area/GuessWork'
import Recommended from '@/app/home/guesswork-area/Recommended-for-you/Recommended'
import CustomerFedback from '@/app/home/Customer-Feedback/CustomerFedback'
import RecentTestDrives from '@/app/home/RecentTestDrives/RecentTestDrives'
import TopCities from '@/app/home/TopCities/TopCities'
import RandomAskedqQuestions from '@/app/home/RandomAskedqQuestions/RandomAskedqQuestions'
import Subscribe from '@/app/home/subscribe/subscribe'
import PopulerMakers from '@/app/home/PopulerMakers/PopulerMakers'

import SearchTabs from '@/app/home/search-tabs/SearchTabs'


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
