"use client";

import RecommendItem from "./RecommendItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Recommended() {
  const item=[
    {
      id: 2,
      name: "Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft in CA",
      description: "30 mi",
      price: 25000,
      image: "/images/car2.png",
    },
    {
      id: 3,
      name: "Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft in CA",
      description: "30 mi",
      price: 30000,
      image: "/images/car3.png",
    },
    {
      id: 4,
      name: "Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft in CA",
      description: "30 mi",
      price: 35000,
      image: "/images/car4.png",
    },
    {
      id: 1,
      name: "Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft in CA",
      description: "30 mi",
      price: 20000,
      image: "/images/car5.png",
    },
     {
      id: 6,
      name: "Used 2017 Chevrolet Silverado 1500 Crew Cab LT Pickup 4D 5 3/4 ft in CA",
      description: "30 mi",
      price: 30000,
      image: "/images/car3.png",
    },
  ];

  return (
    <div className="w-[90%] m-auto my-20">
      <h2 className="text-[30px] text-center font-bold mb-5 text-[#323348]">Recommended For You</h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={3} // العرض 4 عناصر
        breakpoints={{
          320: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 }, 
          1280: { slidesPerView: 4 }, 
        }}
      >
        {item.map((car) => (
          <SwiperSlide key={car.id}>
            <RecommendItem
              name={car.name}
              description={car.description}
              price={car.price}
              image={car.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
