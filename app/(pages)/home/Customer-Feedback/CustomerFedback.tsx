"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";
import type { Swiper as SwiperType } from "swiper";

interface Feedback {
  id: number;
  name: string;
  feedback: string;
  url: string;
}

export default function CustomerFeedback() {
  const [feedback] = useState<Feedback[]>([
    {
      id: 1,
      name: "Megan D",
      feedback:
        "It's definitely the filters on DealersGear that make it easy—you can choose exactly the configuration you're looking for.",
      url: "https://www.youtube.com/embed/qd79mXSjD9o",
    },
    {
      id: 2,
      name: "Megan D",
      feedback:
        "It's definitely the filters on DealersGear that make it easy—you can choose exactly the configuration you're looking for.",
      url: "https://www.youtube.com/embed/qd79mXSjD9o",
    },
    {
      id: 3,
      name: "Megan D",
      feedback:
        "It's definitely the filters on DealersGear that make it easy—you can choose exactly the configuration you're looking for.",
      url: "https://www.youtube.com/embed/qd79mXSjD9o",
    },
    {
      id: 4,
      name: "Megan D",
      feedback:
        "It's definitely the filters on DealersGear that make it easy—you can choose exactly the configuration you're looking for.",
      url: "https://www.youtube.com/embed/qd79mXSjD9o",
    },
  ]);

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
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
    <div className="py-10 relative">
      <p className="text-center text-[#07819d] font-semibold mb-2 text-sm md:text-base">
        Customer Feedback
      </p>
      <h1 className="text-[24px] md:text-[30px] text-center font-bold mb-10 text-[#07819d]">
        What Our Users Say
      </h1>

      <div className="relative">
        {/* السلايدر */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={setSwiperInstance}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          centeredSlides={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1.1, spaceBetween: 10 },
            640: { slidesPerView: 1.2, spaceBetween: 15 },
            768: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.3, spaceBetween: 20 },
          }}
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id}>
              {({ isActive }) => (
                <div
                  className={`overflow-hidden transform transition duration-500 ${
                    !isActive ? "opacity-50 scale-95" : "opacity-100 scale-100"
                  }`}
                >
                  {/* الفيديو */}
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] border-2 p-5 border-gray-500 rounded-[30px]">
                <iframe
  width="100%"
  height="100%"
  src={`${item.url}?rel=0&modestbranding=1`}
  title={item.name}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-lg"
/>

                  </div>

                  {/* النص */}
                  {isActive && (
                    <div className="p-4 text-center mt-4 rounded-lg relative">
                      <FaQuoteRight className="m-auto text-[#2d3233] my-5 w-6 sm:w-8 h-6 sm:h-8 opacity-20" />
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-[18px] sm:text-[25px] italic mt-2">
                        {item.feedback}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* أزرار التنقل */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center z-10"
        >
          <IoIosArrowBack className="w-4 h-4 sm:w-6 sm:h-6 text-[#07819d]" />
        </button>
        <button
          ref={nextRef}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-md p-2 rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center z-10"
        >
          <IoIosArrowForward className="w-4 h-4 sm:w-6 sm:h-6 text-[#07819d]" />
        </button>
      </div>
    </div>
  );
}
