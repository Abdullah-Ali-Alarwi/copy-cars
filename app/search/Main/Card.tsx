"use client";


import React from "react";
import { IoCall } from "react-icons/io5";
import { BsChatLeftTextFill } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import LazyImage from "@/app/components/LazyImage";
import { useFavoriteCarsStore } from "@/store/favoriteCarsStore";

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
  const favoriteCars = useFavoriteCarsStore((state) => state.favoriteCars);
  const addFavorite = useFavoriteCarsStore((state) => state.addFavorite);
  const removeFavorite = useFavoriteCarsStore((state) => state.removeFavorite);

  const isFavorite = favoriteCars.some((c) => c.id === car.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(car.id);
    } else {
      addFavorite(car);
    }
  };

  return (
    <div className="w-[336px] h-[397px] shadow-lg rounded-lg overflow-hidden bg-white flex flex-col relative">
      {/* زر القلب */}
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 z-10 text-2xl p-1 rounded-full transition-colors"
      >
        {isFavorite ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-gray-400 bg-opacity-30 rounded-full" />
        )}
      </button>

      {/* الصورة داخل إطار ثابت */}
      <Link href="/details">
        <div className="w-full h-[200px] relative flex items-center justify-center bg-gray-100">
          <LazyImage
            src={car.image}
            alt={car.model}
            width={420}
            height={189}
        
            className="object-cover h-[189px] "
            loading="lazy"
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
