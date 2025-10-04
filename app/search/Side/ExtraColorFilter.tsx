"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { useCarStore } from "@/store/filterStore";

interface FilterSectionProps {
  title: string;
  icon: StaticImageData;
  items?: string[];
}

export default function ExtraColorFilter({ title, icon }: FilterSectionProps) {
  const [selectedColor, setSelectedColor] = useState<string>("");

  const [customColor, setCustomColor] = useState<string>("#000000");

  const colors = [
    { type: "White", color: "#ffffff" },
    { type: "Black", color: "#000000" },
    { type: "Blue", color: "#2563eb" },
    { type: "Gray", color: "#6b7280" },
    { type: "Red", color: "#dc2626" },
    { type: "Tan", color: "#d2b48c" },
    { type: "Brown", color: "#8b4513" },
    { type: "Custom", color: customColor },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  const toggle = () => setIsOpen(!isOpen);

  const setColors = useCarStore((state) => state.setColors);
  const applyFilters = useCarStore((state) => state.applyFilters);

  const handleColorSelect = (colorType: string) => {
    setSelectedColor(colorType);

    if (colorType === "Custom") {
      setColors([customColor]);
    } else {
      setColors([colorType.toLowerCase()]);
    }

    applyFilters();
  };

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen, selectedColor, customColor]);

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
      >
        <div className="mt-3 flex flex-wrap gap-1">
          {colors.map((item) => (
            <label
              key={item.type}
              className="flex flex-col items-center cursor-pointer relative"
            >
              <input
                type="radio"
                name="car-color"
                value={item.type}
                checked={selectedColor === item.type}
                onChange={() => handleColorSelect(item.type)}
                className="hidden"
              />

              {/* الدائرة */}
              <div
                className={`flex flex-col rounded w-[82px] h-[103px] border-2 flex items-center justify-center transition-colors
                  ${
                    selectedColor === item.type
                      ? "border-[#07819d]"
                      : "border-gray-300"
                  }`}
                onClick={() => handleColorSelect(item.type)}
              >
                <div
                  className="w-7 h-7 border border-gray-300 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                {/* إذا الخيار هو Custom اجعل الدائرة نفسها input للون */}
                {item.type === "Custom" && selectedColor === "Custom" && (
                  <input
                    type="color"
                    value={customColor}
                    onChange={(e) => {
                      setCustomColor(e.target.value);
                      setColors([e.target.value]);
                      applyFilters();
                    }}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />
                )}

                <p className="text-black">{item.type}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
