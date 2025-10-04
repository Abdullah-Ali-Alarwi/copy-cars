"use client";

import React from "react";
import dynamic from "next/dynamic";

const Card = dynamic(() => import("./Card"));

export default function SimilarCars() {
  return (
    <div className="flex ml-10 flex-wrap gap-3 my-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
