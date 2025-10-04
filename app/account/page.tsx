"use client";

import React from "react";
import dynamic from "next/dynamic";

const Side = dynamic(() => import("./Side"));
const AcoountForm = dynamic(() => import("./AcoountForm"));

export default function page() {
  return (
    <div className="mt-[70px] p-10 flex items-center">
      <Side />
      <AcoountForm />
    </div>
  );
}
