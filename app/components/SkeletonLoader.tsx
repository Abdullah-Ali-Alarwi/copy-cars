"use client";
import React from "react";

export default function SkeletonLoader({ height = "100px", width = "100%" }: { height?: string; width?: string }) {
  return (
    <div
      className="animate-pulse bg-gray-300 rounded"
      style={{ height, width }}
    ></div>
  );
}
