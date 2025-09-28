"use client";
import React, { useState } from "react";

export default function TopCities() {
  const [cities] = useState([
    "Used Cars in Albuquerque, NM",
    "Used Cars in Anchorage, AK",
    "Used Cars in Atlanta, GA",
    "Used Cars in Austin, TX",
    "Used Cars in Baltimore, MD",
    "Used Cars in Billings, MT",
    "Used Cars in Birmingham, AL",
    "Used Cars in Bismarck, ND",
    "Used Cars in Boise, ID",
    "Used Cars in Charleston, WV",
    "Used Cars in Charlotte, NC",
    "Used Cars in Cheyenne, W",
    "Used Cars in Chicago, IL",
    "Used Cars in Cleveland, OH",
    "Used Cars in Columbia, SC",
    "Used Cars in Dallas, TX",
    "Used Cars in Denver, CO",
    "Used Cars in Des Moines, IA",
    "Used Cars in Detroit, MI",
    "Used Cars in Hartford, CT",
    "Used Cars in Honolulu, HI",
    "Used Cars in Houston, TX",
    "Used Cars in Indianapolis, IN",
    "Used Cars in Jackson, MS",
    "Used Cars in Las Vegas, NV",
    "Used Cars in Lexington, KY",
    "Used Cars in Little Rock, AR",
    "Used Cars in Los Angeles, CA",
    "Used Cars in Louisville, KY",
    "Used Cars in Madison, WI",
    "Used Cars in Manchester, NH",
    "Used Cars in Memphis, TN",
    "Used Cars in Miami, FL",
    "Used Cars in Minneapolis, MN",
    "Used Cars in New Orleans, LA",
    "Used Cars in New York, NY",
    "Used Cars in Oklahoma City, OK",
    "Used Cars in Omaha, NE",
    "Used Cars in Phoenix, AZ",
    "Used Cars in Pittsburgh, PA",
    "Used Cars in Portland, ME",
    "Used Cars in Portland, OR",
    "Used Cars in Providence, RI",
    "Used Cars in Richmond, VA",
    "Used Cars in Sacramento, CA",
    "Used Cars in Saint Louis, MO",
    "Used Cars in Salt Lake City, UT",
    "Used Cars in San Diego, CA",
    "Used Cars in San Francisco, CA",
    "Used Cars in Seattle, WA",
    "Used Cars in Sioux Falls, SD",
    "Used Cars in Trenton, NJ",
    "Used Cars in Washington, DC",
    "Used Cars in Wichita, KS",
    "Used Cars in Wilmington, DE",
  ]);

    const [bodyStyles] = useState([
    "Top Body Styles",
    "Used Chassis for sale",
    "Used Convertibles for sale",
    "Used Vans for sale",
    "Used Coupes for sale",
    "Used Convertibles for sale",
    "Used Vans for sale",
    "Used Minivans for sale",
    "Used Pickups for sale",
    "Used Minivans for sale",
    "Used Pickups for sale",
  ]);

    const [prices] = useState([
    "Used Cars by Price",
    "Cars Under $1,000",
    "Cars Under $2,000",
    "Cars Under $3,000",
  ]);

  return (
    <div className="w-[90%] mx-auto my-10">
      {/* العنوان مع الخط */}
      <div className="flex items-center mb-8">
        <h2 className="text-[30px] font-bold text-[#07819d] whitespace-nowrap mr-4">
          Top Cities
        </h2>
        <div className="flex-1 border-b border-gray-300"></div>
      </div>

      {/* القائمة */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cities.map((city, index) => (
          <ul
            key={index}
            className=" rounded-md hover:bg-[#f0f6f7] cursor-pointer transition"
          >
            <li className="text-gray-700 list-disc">{city}</li>
          </ul>
        ))}
      </div>


        <div className="flex items-center mb-8">
        <h2 className="text-[30px] mt-10 font-bold text-[#07819d] whitespace-nowrap mr-4">
          Top Body Styles
        </h2>
        <div className="flex-1 border-b border-gray-300"></div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {bodyStyles.map((style, index) => (
          <ul
            key={index}
            className=" rounded-md hover:bg-[#f0f6f7] cursor-pointer transition"
          >
            <li className="text-gray-700 list-disc">{style}</li>
          </ul>
        ))}
      </div>
        <div className="flex mt-10 items-center mb-8">
        <h2 className="text-[30px] font-bold text-[#07819d] whitespace-nowrap mr-4">
        Used Cars by Price

        </h2>
        <div className="flex-1 border-b border-gray-300"></div>
      </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {prices.map((prices, index) => (
          <ul
            key={index}
            className=" rounded-md hover:bg-[#f0f6f7] cursor-pointer transition"
          >
            <li className="text-gray-700 list-disc">{prices}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
