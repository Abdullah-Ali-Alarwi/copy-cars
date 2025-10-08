import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

export default function InputField() {
  return (
    <div className="w-[90%] mx-auto my-5 flex flex-col lg:flex-row   items-center gap-4 ">
      {/* Select 1 */}
      <select className="border p-[12px]   border-gray-300 rounded-lg w-full ">
     
        <option value="option1">Ak</option>
        <option value="option1">Az</option>
        <option value="option1">Am</option>
        <option value="option1">AR</option>
        <option value="option1">cA</option>
    
     
      </select>

      {/* Select 2 */}
      <select className="border p-[12px] border-gray-300  rounded-lg w-full ">
        <option value="">All modules</option>
     <option value="option1">Ak</option>
        <option value="option1">Az</option>
        <option value="option1">Am</option>
        <option value="option1">AR</option>
        <option value="option1">cA</option>
      </select>

      {/* Zip code input */}
      <input
        type="text"
        placeholder="Zip code"
        className="border border-gray-300 p-[12px] rounded-lg w-full "
      />

      {/* Search button */}
      <button className= " flex font-semibold  justify-center items-center gap-2.5 text-lg bg-[#07819d] text-white px-5 p-[12px] rounded-lg hover:bg-[#1095b3] transition-colors w-full ">
       <IoSearchOutline/>   Search 
      </button>
    </div>
  );
}
