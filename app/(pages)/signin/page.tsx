"use client"

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

export default function page() {
  return (
    <div className=" mt-[80px]  mb-[30px] flex items-center justify-center bg-gray-50 px-10">
      <div className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-2xl ">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#09748f]">CarNetWork</h1>
        <p className="text-gray-700 text-center mb-6">Create an account</p>

        <form className="space-y-6">
          <FloatingInput type="text" label="Full Name" />
          <FloatingInput type="email" label="Email Address" />

          {/* صف الهاتف و ZIP Code */}
          <div className="flex gap-4">
            <FloatingInput type="number" label="Phone" className="flex-1" />
            <FloatingInput type="text" label="ZIP Code" className="flex-1" />
          </div>

          <FloatingInput type="password" label="Password" />
          <FloatingInput type="password" label="Confirm Password" />

          <button
            type="submit"
            className="w-full bg-[#097690] text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-between gap-3">
          <button className="flex-1 h-12 border border-gray-300 flex justify-center items-center rounded-lg hover:bg-gray-50 transition">
            <FcGoogle size={22} />
          </button>
          <button className="flex-1 h-12 border border-gray-300 flex justify-center items-center rounded-lg hover:bg-gray-50 transition">
            <BsApple size={22} />
          </button>
          <button className="flex-1 h-12 border border-gray-300 flex justify-center items-center rounded-lg hover:bg-gray-50 transition">
            <FaFacebookF size={22} className="text-blue-600" />
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#09748f] hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}

// Floating Input Field Component
type FloatingInputProps = {
  type: string;
  label: string;
  className?: string;
};

function FloatingInput({ type, label, className }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-2 pt-5  border-b border-gray-400  outline-none text-gray-700"
      />
      <label
        className={`absolute left-2 text-gray-500 text-sm transition-all duration-300 ${
          isFocused || value ? "text-xs -top-1" : "text-base top-5"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
