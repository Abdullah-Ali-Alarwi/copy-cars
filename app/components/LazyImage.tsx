"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";

interface LazyImageProps extends ImageProps {
  className?: string;
}

export default function LazyImage({ src, alt, className = "", ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`overflow-hidden rounded-2xl relative ${className}`}>
      {/* تأثير عند تحميل الصورة */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <Image
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`object-cover w-full h-full transition-transform duration-500 ${
            isLoaded ? "scale-100" : "scale-105 blur-md"
          }`}
          {...props}
        />
      </motion.div>

      {/* Placeholder عند التحميل */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}
    </div>
  );
}
