"use client";

import TrimFilter from "./TrimFilter";
import PriceFilter from "./PriceFilter";
import MileageFilter from "./MileageFilter";
import SliderYear from "./SliderYear";
import BodyTypeFilter from "./BodyTypeFilter";
import ExtraColorFilter from "./ExtraColorFilter";

import TransmissionFilter from "./TransmissionFilter";
import FlueTypeFilter from "./FlueTypeFilter";
import DriveTypeFilter from "./DriveTypeFilter";
import MPGHighway from "./MPGHighway";
import CylindersFilter from "./CylindersFilter";
import ModelFilter from "./ModelFilter";
import MakeFilter from "./MakeFilter";

import make from "@/public/images/1-Make.png";
import model from "@/public/images/2-Model.png";
import price from "@/public/images/3-Price.png";
import mileage from "@/public/images/4-Mileage.png";
import year from "@/public/images/5-Year.png";
import bodyStyle from "@/public/images/6-Body_style.png";
import extColor from "@/public/images/7-Ext-Color.png";

import trim from "@/public/images/9-Trim.png";
import transmission from "@/public/images/10-Transmission.png";
import fuelType from "@/public/images/007-gas-station.png";
import driveType from "@/public/images/003-car-chassis.png";
import mpgHighway from "@/public/images/11-MPG-Highway.png";
import cylinders from "@/public/images/12-Cylinders.png";



export default function FilterSidebar() {


  return (
    <div className="w-72 border-r bg-white p-4">
      {/* فلتر الشركات */}
      <MakeFilter title="Make" icon={make} />
      <ModelFilter title="Model"  icon={model}  />
      <PriceFilter title="Price" icon={price} />
      <MileageFilter title="Mileage" icon={mileage} />
      <SliderYear title="Year" icon={year} />
      <BodyTypeFilter title="Body Style" icon={bodyStyle}  items={["Coupe", "Sedan", "Van", "Hatchback"]} />
      <ExtraColorFilter title="Exterior Color" icon={extColor}/>
      {/* <InternalColorFilter title="Interior Color" icon={intColor}  /> */}
      <TrimFilter title="Trim" icon={trim}   items={["Coupe", "Sedan", "Van", "Hatchback"]} />
      <TransmissionFilter title="Transmission" icon={transmission} items={["Automatic", "Manual"]} />
      <FlueTypeFilter title="Fuel Type" icon={fuelType} items={["Gasoline", "Hybrid", "Electric", "Diesel"]}  />
      <DriveTypeFilter title="Drive Type" icon={driveType}  items={["4WD","AWD","FWD","RWD"]} />
      <MPGHighway title="MPG Highway" icon={mpgHighway}   />
      <CylindersFilter title="Cylinders" icon={cylinders} items={["4","6","8","12"]}  />

      <button className="w-full py-3 mt-3 bg-[#07819d] text-white rounded-md hover:bg-[#1594b0]">
        Search
      </button>
    </div>
  );
}
