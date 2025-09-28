import React from 'react'

import ImageContainer from './ImageContainer'
import Cerdetails from './Cerdetails'
import History from './History'
import InspectedGuaranteed from './InspectedGuaranteed'


     

export default function LifteSection() {
  return (
    <div className=" w-full lg:w-[70%] ">
   <ImageContainer/>
   <Cerdetails/>
   <History/>
   <InspectedGuaranteed/>


    </div>
  )
}
