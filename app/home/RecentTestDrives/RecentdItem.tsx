import Image from "next/image";
import React from "react";

export default function RecommendItem({
  name,
  description,
  image,
}: {
  name: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-full lg:w-[336px] h-[397px] bg-white rounded-lg shadow-md flex flex-col overflow-hidden">
      {/* الصورة داخل إطار ثابت */}
      <div className="w-full h-[200px] relative">
        <Image
  src={image}
  alt={name}
  fill
  className="object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 100vw"
/>

      </div>

      {/* النصوص */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[18px] font-medium text-gray-800">{name}</h3>
        <p className="font-bold text-[#353535] text-[22px] my-2">
          {description}
        </p>
      </div>
    </div>
  );
}
