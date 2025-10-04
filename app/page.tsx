"use client";

import React from "react";
import dynamic from "next/dynamic";

const Headlines = dynamic(() => import("@/app/home/headlines"));
const GuessWork = dynamic(() => import("@/app/home/guesswork-area/GuessWork"));
const Recommended = dynamic(() => import("@/app/home/guesswork-area/Recommended-for-you/Recommended"));
const CustomerFedback = dynamic(() => import("@/app/home/Customer-Feedback/CustomerFedback"));
const RecentTestDrives = dynamic(() => import("@/app/home/RecentTestDrives/RecentTestDrives"));
const TopCities = dynamic(() => import("@/app/home/TopCities/TopCities"));
const RandomAskedqQuestions = dynamic(() => import("@/app/home/RandomAskedqQuestions/RandomAskedqQuestions"));
const Subscribe = dynamic(() => import("@/app/home/subscribe/subscribe"));
const PopulerMakers = dynamic(() => import("@/app/home/PopulerMakers/PopulerMakers"));
const SearchTabs = dynamic(() => import("@/app/home/search-tabs/SearchTabs"));

export default function Home() {
  return (
    <div className="mt-[-30px]">
      <Headlines />
      <GuessWork />
      <Recommended />
      <SearchTabs />
      <CustomerFedback />
      <RecentTestDrives />
      <TopCities />
      <RandomAskedqQuestions />
      <Subscribe />
      <PopulerMakers />
    </div>
  );
}
