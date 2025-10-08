"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { EffectFade, Navigation, Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

export default function ImageContainer() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const images = [
    "/images/car5.png",
    "/images/car2.png",
    "/images/car3.png",
    "/images/car4.png",
    "/images/car5.png",
    "/images/car6.png",
    "/images/car4.png",
  ];

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      typeof swiperInstance.params.navigation === "object" &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="w-[90%] lg:w-full m-auto max-w-3xl relative">
      {/* السلايدر الكبير */}
      <Swiper
        spaceBetween={10}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Navigation, Pagination, Thumbs]}
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="mb-4"
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setSelectedIndex(swiper.activeIndex)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
         <Image
  src={img}
  alt={`Product ${index + 1}`}
  width={760}
  height={560}
  loading="lazy"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 760px"
  className="rounded-lg object-contain w-full h-auto"
/>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* أسهم التحكم */}
      <div
        ref={prevRef}
        className="swiper-button-prev w-[36px] h-[36px] bg-[#dadada] hover:bg-white rounded-full text-gray-400 absolute top-1/2 left-2 -translate-y-1/2 cursor-pointer z-10 flex items-center justify-center"
        style={{ fontSize: "18px" }}
      >
        ❮
      </div>
      <div
        ref={nextRef}
        className="swiper-button-next w-[36px] h-[36px] bg-[#dadada] hover:bg-white rounded-full text-gray-400 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer z-10 flex items-center justify-center"
        style={{ fontSize: "18px" }}
      >
        ❯
      </div>

      {/* السلايدر الصغير (thumbnails) */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        watchSlidesProgress
        modules={[Thumbs]}
        className="cursor-pointer"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} onClick={() => setSelectedIndex(index)}>
            <div
              className={`rounded-md border-2 overflow-hidden cursor-pointer ${
                selectedIndex === index
                  ? "border-black p-1"
                  : "border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                width={127}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
