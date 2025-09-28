"use client";
import React, { useState } from "react";
import { MdPlace } from "react-icons/md";


export default function Place() {
  const [active, setActive] = useState("used");

  return (
    <div className="text-[#7f7f7f]  overflow-hidden">
      {/* ✅ المكان */}
      <div className="flex justify-between border-b border-[#dee2e2] p-3 items-center">
        <div className="flex items-center gap-2">
          <MdPlace className="text-[28px] text-black" />
          <p className="text-[16px] text-black font-medium">Kansas City</p>
        </div>

        <button className="w-[100px] h-[36px] bg-[#f4f5f5] rounded text-sm font-medium">
          1234
        </button>
      </div>

      {/* ✅ الأزرار */}
      <div className="flex justify-between p-3 gap-3">
        <button
          onClick={() => setActive("used")}
          className={`w-[133px] h-[40px] rounded text-sm font-medium transition ${
            active === "used"
              ? "bg-[#07819d] text-white"
              : "bg-[#f4f5f5] text-[#cccccc]"
          }`}
        >
          Used Cars
        </button>

        <button
          onClick={() => setActive("new")}
          className={`w-[133px] h-[40px] rounded text-sm font-medium transition ${
            active === "new"
              ? "bg-[#07819d] text-white"
              : "bg-[#f4f5f5] text-[#cccccc]"
          }`}
        >
          New Cars
        </button>
      </div>
    </div>
  );
}
