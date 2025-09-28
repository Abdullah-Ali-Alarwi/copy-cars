import React from 'react'

import LifteSection from './(left)/LifteSection'
import RightSecitonForm from './(right)/RightSecitonForm'
import SimilarCars from './SimilarCars '


export default function page() {
  return (
    <div className='mt-[80px] w-[95%] '>
   <div className='flex flex-col lg:flex-row '>
       <LifteSection/>
      <RightSecitonForm/>
   </div>
      <SimilarCars/>

    </div>
  )
}
