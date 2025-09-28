import Image from 'next/image'
import React from 'react'
import  trade2 from "@/public/images/trade3.svg"
import  trade3 from "@/public/images/trade2.svg"

export default function VehicaleBottuns() {
  return (
    <div>
        <div className='flex gap-1 m-3'>

            <div className="box  p-[20px] h-[35px] gap-2 bg-[#f4f5f5] flex justify-center items-center flex-1">
<Image src={trade2} alt='trade' width={35} height={35}/>
<p>Get Approved</p>
            </div>
            <div className="box  p-[15px] h-[35px] gap-2  bg-[#f4f5f5] flex justify-center items-center flex-1">
<Image src={trade3} alt='trade' width={35} height={35}/>
<p>Value Your Trade</p>
            </div>
        </div>




        
      
    </div>
  )
}
