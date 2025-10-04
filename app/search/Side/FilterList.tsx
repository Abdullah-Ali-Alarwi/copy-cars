"use client";

import Image from "next/image";
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

import MakeIcon from "@/public/images/1-Make.png";
import ModelIcon from "@/public/images/2-Model.png";
import PriceIcon from "@/public/images/3-Price.png";
import MileageIcon from "@/public/images/4-Mileage.png";
import YearIcon from "@/public/images/5-Year.png";
import BodyStyleIcon from "@/public/images/6-Body_style.png";
import ExteriorColorIcon from "@/public/images/7-Ext-Color.png";
import TrimIcon from "@/public/images/9-Trim.png";
import TransmissionIcon from "@/public/images/10-Transmission.png";
import FuelTypeIcon from "@/public/images/007-gas-station.png";
import DriveTypeIcon from "@/public/images/003-car-chassis.png";
import MPGHighwayIcon from "@/public/images/11-MPG-Highway.png";
import CylindersIcon from "@/public/images/12-Cylinders.png";

export default function FilterSidebar() {
  const filters = [
    { title: "Make", icon: MakeIcon, Component: MakeFilter },
    { title: "Model", icon: ModelIcon, Component: ModelFilter },
    { title: "Price", icon: PriceIcon, Component: PriceFilter },
    { title: "Mileage", icon: MileageIcon, Component: MileageFilter },
    { title: "Year", icon: YearIcon, Component: SliderYear },
    { title: "Body Style", icon: BodyStyleIcon, Component: BodyTypeFilter, items: ["Coupe", "Sedan", "Van", "Hatchback"] },
    { title: "Exterior Color", icon: ExteriorColorIcon, Component: ExtraColorFilter },
    { title: "Trim", icon: TrimIcon, Component: TrimFilter, items: ["Coupe", "Sedan", "Van", "Hatchback"] },
    { title: "Transmission", icon: TransmissionIcon, Component: TransmissionFilter, items: ["Automatic", "Manual"] },
    { title: "Fuel Type", icon: FuelTypeIcon, Component: FlueTypeFilter, items: ["Gasoline", "Hybrid", "Electric", "Diesel"] },
    { title: "Drive Type", icon: DriveTypeIcon, Component: DriveTypeFilter, items: ["4WD","AWD","FWD","RWD"] },
    { title: "MPG Highway", icon: MPGHighwayIcon, Component: MPGHighway },
    { title: "Cylinders", icon: CylindersIcon, Component: CylindersFilter, items: ["4","6","8","12"] },
  ];

  return (
    <div className="w-72 border-r bg-white p-4">
      {filters.map((filter, index) => (
        <filter.Component
          key={index}
          title={filter.title}
          icon={filter.icon}
          items={filter.items ?? []}
        />
      ))}
      <button className="w-full py-3 mt-3 bg-[#07819d] text-white rounded-md hover:bg-[#1594b0]">
        Search
      </button>
    </div>
  );
}
