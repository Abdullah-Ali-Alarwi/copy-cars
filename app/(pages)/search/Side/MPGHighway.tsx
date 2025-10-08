"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore"; // تأكد من مسار الاستيراد

interface MPGHighwayProps {
  title: string;
  icon: StaticImageData;
  min?: number;
  max?: number;
}

export default function MPGHighway({ title, icon, min = 0, max = 200 }: MPGHighwayProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mpgRange = useCarStore((state) => state.mpgRange);
  const setMpgRange = useCarStore((state) => state.setMpgRange);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const [minValue, setMinValue] = useState(mpgRange[0]);
  const [maxValue, setMaxValue] = useState(mpgRange[1]);

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handleMinChange = (value: number) => {
    if (value >= min && value < maxValue) {
      setMinValue(value);
      setMpgRange([value, maxValue]);
      applyFilters();
    }
  };

  const handleMaxChange = (value: number) => {
    if (value <= max && value > minValue) {
      setMaxValue(value);
      setMpgRange([minValue, value]);
      applyFilters();
    }
  };

  const getRangeStyle = () => {
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #ddd ${minPercent}%, #07819d ${minPercent}%, #07819d ${maxPercent}%, #ddd ${maxPercent}%)`,
    };
  };

  return (
    <div className="border-b border-gray-300 pb-5 mb-3">
      {/* العنوان */}
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          <Image src={icon} alt={title} width={24} height={24} />
          {title}
        </span>
        {isOpen ? (
          <MdKeyboardArrowDown className="w-5 h-5 text-gray-500" />
        ) : (
          <MdKeyboardArrowRight className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {/* المحتوى */}
      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
      >
        <div className="mt-3 space-y-4">
          {/* Inputs من وإلى */}
          <div className="flex justify-center items-center text-black gap-2">
            <input
              type="number"
              value={minValue}
              min={min}
              onChange={(e) => handleMinChange(Number(e.target.value))}
              className="border p-2 rounded w-[40%] text-sm"
            />
            <span className="text-sm font-medium">TO</span>
            <input
              type="number"
              value={maxValue}
              max={max}
              onChange={(e) => handleMaxChange(Number(e.target.value))}
              className="border p-2 rounded w-[40%] text-sm"
            />
          </div>

          {/* Double Range Slider */}
          <div className="relative h-6">
            <input
              type="range"
              min={min}
              max={max}
              value={minValue}
              onChange={(e) => handleMinChange(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer absolute pointer-events-auto"
              style={getRangeStyle()}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxValue}
              onChange={(e) => handleMaxChange(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer absolute pointer-events-auto"
              style={getRangeStyle()}
            />
          </div>

          {/* القيم */}
          <div className="flex justify-between text-sm text-gray-600">
            <span>{minValue}</span>
            <span>{maxValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
