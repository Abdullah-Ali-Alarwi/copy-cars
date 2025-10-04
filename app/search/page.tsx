"use client";

import React from "react";
import dynamic from "next/dynamic";

const Sidle = dynamic(() => import("./Side/Sidle"));
const Main = dynamic(() => import("./Main/Main"));

export default function Page() {
  return (
    <div className="flex h-screen w-screen mt-18 overflow-y-hidden">
      <div className="w-[300px] bg-white text-white p-1 hidden lg:block">
        <Sidle />
      </div>

      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Main />
      </div>
    </div>
  );
}
