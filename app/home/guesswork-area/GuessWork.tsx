"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function GuessWork() {
  const [data] = useState([
    {
      id: 1,
      title: "Browse Thousands Of Cars",
      desc: "Our algorithm rates just 30% of cars a good or great deal.",
      img: "/images/g1.png",
    },
    {
      id: 2,
      title: "Make An Offer Be In Control",
      desc: "View personalized, real rates before you even talk to a dealer.",
      img: "/images/g2.png",
    },
    {
      id: 3,
      title: "Buy Online Or Visit The Dealer",
      desc: "Accident history, price drops, days on lot… find it all here.",
      img: "/images/g3.png",
    },
    {
      id: 4,
      title: "List Your Car In Seconds",
      desc: "Scan the Vin Number Add It And Get Offers",
      img: "/images/g4.png",
    },
  ]);

  return (
    <div className="flex pt-[530px] lg:pt-[200px] flex-col lg:flex-row bg-[#f0f6f7] py-10 px-5 md:px-20 items-center gap-10">
      {/* الصورة الكبيرة */}
      <div className="w-full lg:w-[50%] flex justify-center">
        <Image
          src="/images/guess.png"
          alt="guess"
          width={681}
          height={400}
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* النصوص والقائمة */}
      <div className="w-full lg:w-[50%] flex flex-col gap-6">
        <h1 className="text-[28px] md:text-[35px] font-bold mb-5 :text-center lg:text-left">
          Be In Control Shop And Sell <br />
          Your Way
        </h1>

        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-row md:flex-row gap-4 md:gap-5  lg:items-center md:items-start"
          >
            <div className="flex flex-row">
              <Image src={item.img} alt={item.title} width={84} height={84} />
            </div>
            <div className=" lg:text-center md:text-left">
              <h4 className="text-[20px] md:text-[22px] font-bold">{item.title}</h4>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
