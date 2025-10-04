"use client";

import Image from "next/image";
import React from "react";
import { IoCall } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";

interface Car {
  id: number;
  model: string;
  color: string;
  year: number;
  price: number;
  image: string;
}

interface CardProps {
  car: Car;
}

export default function Card({ car }: CardProps) {
  return (
    <div className="w-[336px] h-[397px] shadow-lg rounded-lg overflow-hidden bg-white flex flex-col">
      {/* الصورة داخل إطار ثابت */}
  <Link href="/details">
  <div className="w-full h-[200px] relative flex items-center justify-center bg-gray-100">
  <Image
  src={car.image}
  alt={car.model}
  width={420}
  height={200}
  sizes="(max-width: 768px) 100vw, 420px"
  className="object-cover"
  loading="lazy" // تأكيد التحميل الكسول
/>
  </div>
</Link>

      {/* الوصف */}
      <div className="p-4 flex flex-col flex-1">
        <p className="font-medium text-gray-800">
          {car.year} {car.model} - {car.color}
        </p>
        <p className="text-sm text-gray-500">{car.price} USD</p>

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
            <p className="font-bold text-lg text-gray-900">${car.price}</p>
            <p className="text-sm text-gray-500 line-through">
              MSRP ${Math.round(car.price * 1.05)}
            </p>
          </div>
          <button className="bg-red-500 text-white px-5 rounded hover:bg-red-600">
            Make An Offer
          </button>
        </div>
      </div>
    </div>
  );
}
