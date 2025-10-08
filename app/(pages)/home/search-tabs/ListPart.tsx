"use client";

import React, { useState } from 'react';
import WishListMoudle from './WishListMoudle';
import LazyImage from '@/app/components/LazyImage';

export default function ListPart() {
  const carCategories = [
    { name: "Used Car", link: "#" },
    { name: "New Car", link: "#" },
    { name: "Certified Pre-Owned", link: "#" },
    { name: "For Sale By Owner", link: "#" },
    { name: "Financing", link: "#" },
  ];

  const [showWishList, setShowWishList] = useState(false);

  return (
    <div className="w-[90%] m-auto lg:my-5 flex justify-between items-center flex-wrap">
      {/* قائمة السيارات */}
      <ul className="flex flex-wrap gap-4">
        {carCategories.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="block text-[13px] mb-2 py-4 px-1 lg:px-6 hover:border-b-2 border-[#07819d] transition-colors"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* زر Wish List */}
      <button
        onClick={() => setShowWishList(true)}
        className="flex h-[46px] w-[162px] items-center justify-center gap-2 border border-[#07819d] rounded-lg hover:bg-[#e0f7fa] transition px-3 mt-4 lg:mt-0"
      >
       <LazyImage
  src="/images/wishlist.png"
  alt="Wish List"
  width={30}
  height={30}
  className="object-cover"
  loading="lazy"
  sizes="30px"
/>

        <span className="text-[#07819d] font-medium">Wish List</span>
      </button>

      {/* مودال Wish List */}
      {showWishList && (
        <div className=" absolute  inset-0 z-50 flex justify-center items-start bg-white bg-opacity-90 pt-10">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative">
            {/* زر إغلاق */}
            <button
              onClick={() => setShowWishList(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold"
            >
              ✕
            </button>

           

               <WishListMoudle />
         
         
          </div>
        </div>
      )}
    </div>
  );
}
