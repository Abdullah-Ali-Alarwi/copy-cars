"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore";

interface SliderPriceProps {
  title: string;
  icon: StaticImageData;
}

export default function PriceFilter({ title, icon }: SliderPriceProps) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const setMaxPrice = useCarStore((state) => state.setMaxPrice);
  const applyFilters = useCarStore((state) => state.applyFilters);

  // قيم السعر (مباشرة من الاستور)
  const min = 500;
  const max = 50000;
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handleMinChange = (value: number) => {
    if (value < maxValue) {
      setMinValue(value);
    }
  };

  const handleMaxChange = (value: number) => {
    if (value > minValue) {
      setMaxValue(value);
      setMaxPrice(value); // تحديث القيمة في store
      applyFilters(); // تطبيق الفلاتر مباشرة
    }
  };

  const getRangeStyle = () => {
    const minPercent = ((minValue - min) / (max - min)) * 100;
    const maxPercent = ((maxValue - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #ddd ${minPercent}%, #323348 ${minPercent}%, #323348 ${maxPercent}%, #ddd ${maxPercent}%)`,
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
              onChange={(e) => handleMinChange(Number(e.target.value))}
              className="border p-2 rounded w-[40%] text-sm"
            />
            <span className="text-sm font-medium">TO</span>
            <input
              type="number"
              value={maxValue}
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
            <span>${minValue.toLocaleString()}</span>
            <span>${maxValue.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Style Thumb */}
      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: white;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
