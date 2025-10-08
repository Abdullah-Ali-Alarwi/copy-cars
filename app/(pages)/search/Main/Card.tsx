"use client";

import Image from "next/image";
import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import { BsChatLeftTextFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import Link from "next/link";

// تعريف نوع السيارة الكامل
export interface Car {
  id: number;            // معرف فريد لكل سيارة
  model: string;         // موديل السيارة
  color: string;         // لون السيارة
  year: number;          // سنة الصنع
  price: number;         // سعر السيارة
  mileage: number;       // عدد الكيلومترات المقطوعة
  trim: string;          // نوع الفئة
  bodyType: string;      // نوع الجسم
  transmission: string;  // ناقل الحركة
  fuelType: string;      // نوع الوقود
  driveType: string;     // نظام الدفع
  mpgHighway: number;    // كفاءة الوقود على الطريق السريع
  cylinders: number;     // عدد الأسطوانات
  image: string;         // رابط صورة السيارة
}

interface CardProps {
  car: Car;
  onFavoriteToggle?: (car: Car) => void;
  isFavorite?: boolean;
}

export default function Card({ car, onFavoriteToggle, isFavorite }: CardProps) {
  const [favorite, setFavorite] = useState(isFavorite || false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
    if (onFavoriteToggle) {
      onFavoriteToggle(car);
    }
  };

  return (
    <div className="w-full lg:w-[336px] shadow-lg rounded-lg overflow-hidden bg-white flex flex-col relative">
      {/* زر القلب */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 text-white bg-black/40 rounded-full p-2 hover:bg-black/60"
      >
        {favorite ? <BsHeartFill className="text-red-500" size={20} /> : <BsHeart size={20} />}
      </button>

      {/* الصورة داخل إطار ثابت */}
      <Link href="/details">
        <div className="w-full h-[200px] relative">

<div className="relative w-[336px] h-[200px]">
  <Image
    src={car.image}
    alt={car.model}
    fill
    className="object-cover"
  />
</div>



        </div>
      </Link>

      {/* الوصف */}
      <div className="p-4 flex flex-col flex-1">
        <p className="font-medium text-gray-800">
          {car.year} {car.model} - {car.color}
        </p>
        <p className="text-sm text-gray-500">{car.mileage} mi • {car.trim}</p>
        <p className="text-sm text-gray-500">Body: {car.bodyType}</p>
        <p className="text-sm text-gray-500">Transmission: {car.transmission}</p>
        <p className="text-sm text-gray-500">Fuel: {car.fuelType}</p>

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
