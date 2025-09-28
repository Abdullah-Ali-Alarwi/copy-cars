import Image from 'next/image'
import React from 'react'
import cotten from "@/public/images/cotton.svg"


export default function Filter() {
  return (
   <div className='text-[#7f7f7f] flex justify-between border-b border-[#dee2e2]  p-2'>
      <div className='flex gap-1  items-center'>  
           <Image src={ cotten}width={16} height={16} alt='icon'/>
        <p className='text-black text-[16px] font-bold'>Filter</p>
     </div>
     <p>105 Listings</p>



      
    </div>
  )
}
