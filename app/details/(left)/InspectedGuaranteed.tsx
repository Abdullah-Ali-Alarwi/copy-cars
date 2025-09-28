"use client"
import  { useState } from "react"
import { FaCheck } from "react-icons/fa"

export default function InspectedGuaranteed() {
  const [Inspected] = useState([
    "Stationary road test",
    "Body",
    "Driving road test",
    "Oil level, Battery, etc",
    "Brakes & wheels",
    "Suspension and underbody",
  ])

  return (

<div className="w-[90%] m-auto   pb-5 mb-10">


  <h1 className="text-[#323348] text-[28px] my-3 font-bold">Inspected & Guaranteed
</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Inspected.map((list, index) => (
        <div key={index} className="flex items-center gap-3 p-2">
          {/* أيقونة الصح */}
          <div className="w-[27px] h-[27px] bg-[#03824d] rounded-full flex justify-center items-center">
            <FaCheck className="text-white text-sm" />
          </div>

          {/* النص */}
          <p className="text-[#323348] text-sm">{list}</p>
        </div>
      ))}
    </div>
</div>
  )
}
