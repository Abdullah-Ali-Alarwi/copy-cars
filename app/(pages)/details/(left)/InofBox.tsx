"use client"

import Image from "next/image"
import React from "react"

type InfoItem = {
  image: string
  title: string
  value: string
}

interface InfoBoxProps {
  info: InfoItem[]
}

export default function InfoBox({ info }: InfoBoxProps) {
  return (
    <div className="flex gap-5 flex-col lg:flex-row m-auto flex-wrap">
      {info.map((e, i) => (
        <div
          key={i}
          className="bg-[#f9f9f9]  w-full lg:w-[208px]  h-[182px] p-[25px] rounded-md flex flex-col gap-2 items-center justify-center"
        >
          {/* الصورة */}
          <div className="border-b-2 border-gray-300 w-[90%] flex justify-center items-center pb-3">
            <Image src={e.image} width={45} height={45} alt={e.title} />
          </div>

          {/* النص */}
          <div className="text-center">
            <p className="text-[#323348] text-[16px] font-bold">{e.title}</p>
            <p>{e.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
