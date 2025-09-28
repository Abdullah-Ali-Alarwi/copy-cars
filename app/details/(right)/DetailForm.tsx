import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsChatLeftTextFill } from "react-icons/bs";
import { IoCall } from "react-icons/io5";



export default function DetailForm() {
  return (
     <div className='border-b border-[#ddd6d6] pb-3 '>
        <div className='flex    gap-1'>  
            <p>Home/</p>
            <p>Used/</p>
            <p>Car</p>
        </div>
        <h1 className='text-[#323348] text-[30px]  font-semibold'>Used 2020 BMW M2 Coupe 2D in Orange, CA</h1>
      <p className='text-[#797979]'>30k mi</p>


      <div className='flex justify-between '>
  <div className='flex justify-center items-center gap-2 '>  <h1 className='text-[35px] font-bold text-red-500'>$28,830</h1>
    <p className='text-[#323348] text-[18px]'>$118/month</p></div>
    <div className="icon bg-red-500 w-[29px] h-[27px] flex justify-center items-center text-white rounded">
        <CiHeart className='text-[22px] font-bold' />


    </div>

      </div>
                <p className='text-[#797979]'>MSRP $30,590

</p>


{/* buttons  */}

<div className='flex gap-2 '>
    <button className='flex justify-center items-center gap-1 flex-1 bg-[#323348] text-white font-bold p-2 rounded-md'>  <IoCall/>   Call</button>
    <button className='flex justify-center items-center gap-1 flex-1 bg-[#323348] text-white font-bold p-2 rounded-md'>   <BsChatLeftTextFill/>  Text</button>
</div>
    </div>
 
  )
}
