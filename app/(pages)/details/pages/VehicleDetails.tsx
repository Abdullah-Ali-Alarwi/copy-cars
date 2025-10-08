"use client"
import { useState } from "react"

export default function VehicleDetails() {
  const [carData] = useState({
    Stock: "#447720",
    VIN: "4T1K61AK XMU526823",
    Miles: "8-Speed Automatic",
    "Highway MPG": "38 MPG",
    "City MPG": "27 MPG",
    Engine: "2.5L I4 DOHC 16V Gasoline",
    Drivetrain: "FWD",
    Interior: "Black",
    Exterior: "Gray",
  })

  return (
    <div className="text-lg font-semibold text-gray-700  w-full">
      <ul>
        {Object.entries(carData).map(([key, value]) => (
          <li
            key={key}
            className="flex justify-between items-center border-b border-gray-200 py-2"
          >
            <span className=" text-[16px] text-[#323348]">{key}</span>
            <span className="text-[#686868] text-[16px] ">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
