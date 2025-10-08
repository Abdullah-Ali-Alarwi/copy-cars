"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore"; // تأكد من مسار الاستيراد

interface FilterSectionProps {
  title: string;
  icon: StaticImageData;
  items?: string[];
}

export default function DriveTypeFilter({ title, icon, items = [] }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const setDriveTypes = useCarStore((state) => state.setDriveTypes);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const toggle = () => setIsOpen(!isOpen);

  const handleCheck = (item: string) => {
    let updatedItems: string[];
    if (selectedItems.includes(item)) {
      updatedItems = selectedItems.filter(i => i !== item);
    } else {
      updatedItems = [...selectedItems, item];
    }
    setSelectedItems(updatedItems);
    setDriveTypes(updatedItems); // تحديث store
    applyFilters(); // تطبيق الفلتر
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, selectedItems]);

  return (
    <div className="border-b border-gray-300 pb-5 mb-3">
      {/* العنوان */}
      <button
        onClick={toggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="flex items-center gap-2 text-gray-700 font-medium">
<Image
  src={icon}
  alt={title}
  width={32}
  height={20}
  loading="lazy"
  sizes="32px"
/>
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
        className="flex flex-col gap-2 mt-3"
      >
        {items.map((item) => (
          <label
            key={item}
            className={`flex border-gray-400 py-2 px-3 justify-between items-center gap-2 border rounded cursor-pointer transition-colors 
              ${selectedItems.includes(item)
                ? "border-[#07819d] text-black"
                : "border-[#f1f3f3] text-gray-500 hover:border-[#07819d]"
              }`}
            onClick={() => handleCheck(item)}
          >
            <span className="text-sm font-medium">{item}</span>
            <input
              type="checkbox"
              checked={selectedItems.includes(item)}
              onChange={() => handleCheck(item)}
              className="w-5 h-5 border-0 outline-none accent-[#07819d] focus:ring-2 focus:ring-[#07819d]"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
