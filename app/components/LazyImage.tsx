"use client";

import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

export default function LazyImage(props: ImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center bg-gray-100">
          <div className="loader"></div>
        </div>
      )}

      <Image
        {...props}
        className={`${props.className} transition-opacity duration-500 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        loading="lazy"
        onLoadingComplete={() => setLoading(false)}
      />

      <style jsx>{`
        .loader {
          border: 4px solid #f3f3f3;
          border-top: 4px solid #07819d;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
