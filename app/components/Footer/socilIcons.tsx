import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF,FaLinkedinIn, FaInstagram  } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex w-[90%] m-auto space-x-4 border-t pt-4 border-[#79a8c1] mt-4 text-2xl">
         <a href="#" className="text-white hover:text-[#f4ecec]">
        <IoLogoYoutube />
      </a>
      <a href="#" className="text-white hover:text-[#d6d7da]">
        <FaFacebookF />
      </a>
     
      <a href="#" className="text-white hover:text-[#ede0e3]">
        <FaInstagram />
      </a>
       <a href="#" className="text-white hover:text-[#cacfd2]">
        <FaLinkedinIn />
      </a>
     
    </div>
  )
}
