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

export default function BodyTypeFilter({ title, icon, items }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const { setBodyTypes, applyFilters } = useCarStore(); // استخدم setBodyTypes وليس setTrims

  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggle = () => setIsOpen(!isOpen);

  const handleCheck = (item: string) => {
    let updatedItems: string[];

    if (selectedItems.includes(item)) {
      updatedItems = selectedItems.filter((i) => i !== item);
    } else {
      updatedItems = [...selectedItems, item];
    }

    setSelectedItems(updatedItems);
    setBodyTypes(updatedItems); // تحديث bodyTypes في الـ store
    applyFilters(); // تطبيق الفلترة مباشرة
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, selectedItems]);

  return (
    <div className="border-b border-gray-300 pb-5 mb-3">
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

      <div
        ref={contentRef}
        style={{
          maxHeight: maxHeight,
          transition: "max-height 0.4s ease",
          overflow: "hidden",
        }}
      >
        <div className="mt-3 space-y-2">
          {items.map((item) => (
            <label
              key={item}
              className="flex justify-between items-center text-gray-600"
            >
              <span>{item}</span>
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedItems.includes(item)}
                onChange={() => handleCheck(item)}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
