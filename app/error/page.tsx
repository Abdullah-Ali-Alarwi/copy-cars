import Image from "next/image";
import React from "react";
import Subscribe from "../home/subscribe/subscribe";

export default function page() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center mt-[100px]  pt-10">
      <Image
        src="/images/404.png"
        alt="404"
        width={316}
        height={121}
        className="mb-6"
      />
      <p className="text-2xl md:text-3xl font-bold text-center text-[#323348]">
        The Page you requested was not found!
      </p>

        <button className="w-[191px] py-3 my-10 bg-[#07819d] text-white rounded-md hover:bg-[#1594b0]">
       Go Back to Home 
      </button>

      
    </div>
    <Subscribe/>
    </div>
  );
}
