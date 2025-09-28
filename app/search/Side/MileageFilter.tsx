"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore"; // استدعاء الستيت

interface MileageFilterProps {
  title: string;
  icon: StaticImageData | string; // يمكن أن يكون صورة ثابتة أو رابط
  min?: number;
  max?: number;
}

export default function MileageFilter({
  title,
  icon,
  min = 500,
  max = 600000,
}: MileageFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [maxValue, setMaxValue] = useState(max);

  const { setMaxMileage, applyFilters } = useCarStore(); // أخذ الدوال من store

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handleMaxChange = (value: number) => {
    setMaxValue(value);
    setMaxMileage(value);
    applyFilters();
  };

  const getRangeStyle = () => {
    const minPercent = ((min - min) / (max - min)) * 100;
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
        <div className="flex text-sm text-gray-600 mt-2">
          <span className="text-[#101116] text-[16px]">
            {maxValue.toLocaleString()} miles or less
          </span>
        </div>
        <div className="mt-3 space-y-4">
          <div className="relative h-6">
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
        </div>
      </div>
    </div>
  );
}
