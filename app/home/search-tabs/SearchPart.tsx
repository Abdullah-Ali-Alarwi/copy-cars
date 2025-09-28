import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


export default function SearchPart() {
  return (
    <div className=" w-[90%] mx-auto mt-10 flex px-3 bg-[#f4f5f5] py-3 rounded-lg">
        <button className="">
        <IoSearchOutline className="text-2xl text-[#918686] mx-1" />
      </button>
      <input type="search" placeholder="Search..." className="outline-none  w-[95%]" />
      
    </div>
  )
}
