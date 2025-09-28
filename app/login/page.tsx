"use client"

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className=" mt-[80px] mb-[50px]  flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white border border-gray-300 p-8 rounded-xl shadow-lg">
        
        {/* شعار */}
        <h1 className="text-3xl font-bold text-center mb-2 text-[#09748f]">CarNetWork</h1>
        <p className="text-center text-gray-700 mb-6">Login to your account</p>

        {/* فورم تسجيل الدخول */}
        <form className="space-y-6">
          <FloatingInput type="email" label="Email address" />
          <FloatingInput type="password" label="Password" />

          {/* رابط نسيت كلمة المرور */}
          <div className="text-right">
            <Link href="#" className="text-sm text-[#09748f] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* زر تسجيل الدخول */}
          <button
            type="submit"
            className="w-full bg-[#09748f] text-white py-2 rounded-lg hover:bg-[#076b7d] transition"
          >
            Log in
          </button>
        </form>

        {/* فصل */}
        <div className="my-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* أزرار تسجيل الدخول الاجتماعي */}
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

        {/* رابط إنشاء حساب */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#09748f] hover:underline">
            Create account
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
};

function FloatingInput({ type, label }: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="relative w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-2 pt-5 pb-2 border-b border-gray-400 focus:border-[#09748f] outline-none text-gray-700 transition-colors duration-300"
      />
      <label
        className={`absolute left-2 text-gray-500 transition-all duration-300 ${
          isFocused || value ? "text-xs -top-1 text-[#09748f]" : "text-base top-5"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
