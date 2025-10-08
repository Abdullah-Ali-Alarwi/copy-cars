"use client";
import React, { useState } from "react";
import RecentdItem from "./RecentdItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

export default function RecentTestDrives() {
  const [item] = useState([
    {
      id: 1,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 2,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 3,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 4,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 5,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 6,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
    {
      id: 7,
      name: "Matt Smith",
      description:
        "2021 Infinity QX50 Test Drive Overview Used 2020 BMW M2 Coupe 2D in Orange, CA",
      image: "/images/2017-mercedes-c-class-new-versions.png",
    },
  ]);

  return (
    <div className="w-[90%] m-auto my-20 relative">
      <h2 className="text-[30px] text-center font-bold mb-5 text-[#07819d]">
        Recommended For You
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {item.map((car) => (
          <SwiperSlide key={car.id}>
            <RecentdItem
              name={car.name}
              description={car.description}
              image={car.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* أزرار التحكم */}
      <button className="swiper-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
        <IoIosArrowBack className="w-6 h-6 text-[#07819d]" />
      </button>
      <button className="swiper-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full">
        <IoIosArrowForward className="w-6 h-6 text-[#07819d]" />
      </button>
    </div>
  );
}
