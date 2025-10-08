"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import LazyImage from "@/app/components/LazyImage";

export default function PopularMakers() {
  const makers = [
    { id: 1, name: "Maker 1", image: "/images/b1.png" },
    { id: 2, name: "Maker 2", image: "/images/b2.png" },
    { id: 3, name: "Maker 3", image: "/images/b3.png" },
    { id: 4, name: "Maker 4", image: "/images/b4.png" },
    { id: 5, name: "Maker 5", image: "/images/b5.png" },
  ];

  return (
    <div className=" w-[90%]  mx-auto my-10">
      <h2 className="text-[30px] font-bold text-center mb-10 text-[#07819d] whitespace-nowrap">
        Popular Makers
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={10} 
        slidesPerView={2} 
        centeredSlides={false} 
        breakpoints={{
          640: { slidesPerView: 2 }, // sm
          768: { slidesPerView: 3 }, // md
          1024: { slidesPerView: 4 }, // lg
        }}
      >
        {makers.map((maker) => (
          <SwiperSlide key={maker.id} className="flex justify-center">
            <div className="w-[189px] h-[140px]">
             <LazyImage
  src={maker.image}
  alt={maker.name}
  width={189}
  height={140}
  className="object-contain mx-auto"
  loading="lazy" // تحميل الصورة عند الحاجة فقط
  sizes="(max-width: 768px) 100vw, 189px" // اختيار حجم الصورة المناسب
/>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
