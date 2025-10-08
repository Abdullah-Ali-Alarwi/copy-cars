"use client";

import React from "react";

export default function OfferForm() {
  return (
    <div className="max-w-md mx-auto p-6 border-b-1 mb-3 border-[#bfb9b9]">
      <h2 className="text-lg font-semibold mb-4">Submit An Offer</h2>

      {/* حقل مع ليبل عائم */}
      <div className="relative mb-4">
        <input
          type="text"
          id="offer"
          placeholder=" "
          className="peer w-full  bg-[#f4f5f5] rounded-md px-3 pt-5 pb-2 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
        />
        <label
          htmlFor="offer"
          className="absolute left-3 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
        >
          Your Offer Amount
        </label>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          id="fullname"
          placeholder=" "
          className="peer w-full bg-[#f4f5f5] rounded-md px-3 pt-5 pb-2 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
        />
        <label
          htmlFor="fullname"
          className="absolute left-3 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
        >
          Full Name
        </label>
      </div>

      <div className="relative mb-4">
        <input
          type="tel"
          id="phone"
          placeholder=" "
          className="peer w-full bg-[#f4f5f5] rounded-md px-3 pt-5 pb-2 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
        />
        <label
          htmlFor="phone"
          className="absolute left-3 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
        >
          Phone
        </label>
      </div>

      <div className="relative mb-4">
        <input
          type="email"
          id="email"
          placeholder=" "
          className="peer w-full bg-[#f4f5f5] rounded-md px-3 pt-5 pb-2 text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none"
        />
        <label
          htmlFor="email"
          className="absolute left-3 top-2 text-gray-400 text-xs transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500"
        >
          Email
        </label>
      </div>

      <button className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600">
        Submit
      </button>
      <button className="w-full my-3 border-red-500 border text-red-500  bg-white py-2 rounded-md font-semibold ">
        Buy online
      </button>

      <p className="text-[#797979] text-[13px] text-center">Please Consider Submitting A Reasonable Offer For The Dealership To Consider</p>
    </div>
  );
}
