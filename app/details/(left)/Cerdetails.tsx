"use client"

import React from "react"
import InfoBox from "./InofBox";


export default function Cerdetails() {
  const infoData = [
    { title: "Mileage", value: "30,957", image: "/images/002-download-speed.png" },
    { title: "Stock", value: "0786", image: "/images/002-download-speed.png" },
    { title: "Transmission", value: "Automatic", image: "/images/002-download-speed.png" },
    { title: "Drivetrain", value: "Front-Wheel Drive", image: "/images/002-download-speed.png" },
    { title: "Fuel Type", value: "Gasoline", image: "/images/002-download-speed.png" },
    { title: "Engine", value: "208 hp 2L I4", image: "/images/002-download-speed.png" },
    { title: "Interior", value: "Ash", image: "/images/002-download-speed.png" },
    { title: "Exterior", value: "Greenish Blue", image: "/images/002-download-speed.png" },
  ]

  return (
    <div className="w-[90%] m-auto mt-20 flex  justify-center items-center ">
     
      <InfoBox info={infoData} />

    </div>
  )
}
