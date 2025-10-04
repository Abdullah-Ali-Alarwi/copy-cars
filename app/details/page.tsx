"use client";

import React from "react";
import dynamic from "next/dynamic";

const LifteSection = dynamic(() => import("./(left)/LifteSection"));
const RightSecitonForm = dynamic(() => import("./(right)/RightSecitonForm"));
const SimilarCars = dynamic(() => import("./SimilarCars "));

export default function page() {
  return (
    <div className="mt-[80px] w-[95%]">
      <div className="flex flex-col lg:flex-row">
        <LifteSection />
        <RightSecitonForm />
      </div>
      <SimilarCars />
    </div>
  );
}
