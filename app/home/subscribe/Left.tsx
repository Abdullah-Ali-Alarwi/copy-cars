import React from "react";
import Image from "next/image";

export default function Left() {
  return (
    <div className=" ">
      {/* العنوان */}
      <p className=" text-2xl font-semibold mb-10">
        Install Our Mobile App On Your <br/> Smartphone
      </p>

      {/* أزرار التحميل */}
      <div className="flex flex-wrap gap-4">
        <div className="w-[135px] h-[40px] relative">
          <Image
            src="/images/download-on-the-app-store.png"
            alt="App Store"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-[135px] h-[40px] relative">
          <Image
            src="/images/get-it-on-google-play.png"
            alt="Google Play"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
