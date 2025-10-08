"use client"
import Image from "next/image"
import React, { useState } from "react"

export default function History() {
  const [history] = useState([
    {
      image: "/images/h1.svg",
      title: "Overall Check",
      data: "0 Issues reported",
    },
    {
      image: "/images/h2.svg",
      title: "Accident Check",
      data: "0 Issues reported",
    },
    {
      image: "/images/h3.svg",
      title: "Owner",
      data: "Single owner",
    },
  ])

  return (
    <div className="p-5 w-[90%] m-auto border-b border-gray-300 my-10">
      <h1 className="text-[#323348] text-2xl font-bold mb-4">History</h1>

      <div className="flex flex-wrap gap-5">
        {history.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 justify-start items-center bg-white p-4 rounded-lg "
          >
            <div className="w-[61px] h-[61px] bg-[#03814c] flex justify-center items-center rounded-2xl text-white">
              <Image
                src={item.image}
                height={60}
                width={60}
                alt={item.title}
              />
            </div>
            <div>
              <h4 className="font-bold text-[#323348] text-lg">
                {item.title}
              </h4>
              <p className="text-sm text-[#323348]">{item.data}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
