"use client";

import React from "react";
import dynamic from "next/dynamic";

const Headlines = dynamic(() => import("@/app/(pages)/home/headlines"));
const GuessWork = dynamic(() => import("@/app/(pages)/home/guesswork-area/GuessWork"));
const Recommended = dynamic(() => import("@/app/(pages)/home/guesswork-area/Recommended-for-you/Recommended"));
const RecentTestDrives = dynamic(() => import("@/app/(pages)/home/RecentTestDrives/RecentTestDrives"));
const TopCities = dynamic(() => import("@/app/(pages)/home/TopCities/TopCities"));
const RandomAskedqQuestions = dynamic(() => import("@/app/(pages)/home/RandomAskedqQuestions/RandomAskedqQuestions"));
const Subscribe = dynamic(() => import("@/app/(pages)/home/subscribe/subscribe"));
const PopulerMakers = dynamic(() => import("@/app/(pages)/home/PopulerMakers/PopulerMakers"));
const SearchTabs = dynamic(() => import("@/app/(pages)/home/search-tabs/SearchTabs"));

export default function Home() {
  return (
    <div className="mt-[-30px]">
      <Headlines />
      <GuessWork />
      <Recommended />
      <SearchTabs />
      <RecentTestDrives />
      <TopCities />
      <RandomAskedqQuestions />
      <Subscribe />
      <PopulerMakers />
    </div>
  );
}
