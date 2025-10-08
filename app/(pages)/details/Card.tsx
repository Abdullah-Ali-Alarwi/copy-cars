"use client";

import Image from "next/image";
import React from "react";
import { IoCall } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";

export default function Card() {
  return (
    <div className="w-full lg:w-[336px] h-[200px] shadow-lg rounded-lg overflow-hidden bg-white flex flex-col">
      {/* الصورة داخل إطار ثابت */}
      <Link href="/details">
        <div className="w-full h-[200px] relative">
          <Image
            src="/images/BMW-M2-1.png"
            alt="BMW"
            fill
                                                          className="object-cover"
          />
        </div>
      </Link>

      {/* الوصف */}
      <div className="p-4 flex flex-col flex-1">
        <p className="font-medium text-gray-800">
          Used 2020 BMW M2 Coupe 2D in Orange, CA
        </p>
        <p className="text-sm text-gray-500">30 mi</p>

        {/* الأزرار */}
        <div className="flex gap-2 mt-3">
          <button className="flex justify-center items-center flex-1 gap-1 bg-gray-200 text-gray-800 py-1 rounded hover:bg-gray-300">
            <IoCall /> Call
          </button>
          <button className="flex justify-center items-center flex-1 gap-1 bg-gray-200 text-gray-800 py-1 rounded hover:bg-gray-300">
            <BsChatLeftTextFill /> Text
          </button>
          <button className="flex justify-center items-center flex-1 gap-1 bg-gray-200 text-gray-800 py-1 rounded hover:bg-gray-300">
            <TiDocumentText /> Details
          </button>
        </div>

        {/* السعر */}
        <div className="flex mt-auto justify-between gap-2">
          <div>
            <p className="font-bold text-lg text-gray-900">$28,830</p>
            <p className="text-sm text-gray-500 line-through">MSRP $30,590</p>
          </div>
          <button className="bg-red-500 text-white px-5 rounded hover:bg-red-600">
            Make An Offer
          </button>
        </div>
      </div>
    </div>
  );
}
