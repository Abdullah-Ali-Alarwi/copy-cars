"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore";

interface FilterSectionProps {
  title: string;
  icon: StaticImageData;
  items: string[];
}

export default function CylindersFilter({ title, icon, items }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const cylinders = useCarStore((state) => state.cylinders);
  const setCylinders = useCarStore((state) => state.setCylinders);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const handleSelect = (item: string) => {
    const numberValue = parseInt(item);

    let updated: number[];
    if (cylinders.includes(numberValue)) {
      updated = cylinders.filter((c) => c !== numberValue);
    } else {
      updated = [...cylinders, numberValue];
    }

    setCylinders(updated);
    applyFilters();
  };

  return (
    <div className="border-b border-gray-300 pb-5 mb-3">
      {/* العنوان */}
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="flex items-center gap-2 text-gray-700 font-medium">
          <Image src={icon} alt={title} width={32} height={20} />
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
          maxHeight,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
        className="flex flex-wrap gap-2 my-5 mt-3"
      >
        {items.map((item) => (
          <label
            key={item}
            className={`relative flex w-[55px] border py-3 px-1 justify-center items-center border-gray-300 rounded cursor-pointer transition-colors 
              ${
                cylinders.includes(parseInt(item))
                  ? "border-black text-black"
                  : "border-gray-300 text-gray-400"
              }`}
            onClick={() => handleSelect(item)}
          >
            {/* مربع التشيك */}
            <input
              type="checkbox"
              checked={cylinders.includes(parseInt(item))}
              onChange={() => handleSelect(item)}
              className="absolute top-[2px] right-[2px] w-3 h-3 border-0 outline-none accent-[#07819d] focus:ring-2 focus:ring-[#07819d]"
            />

            {/* النص */}
            <span className="text-sm font-medium">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
