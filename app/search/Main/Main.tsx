"use client";

import React, { useState, useEffect } from "react";
import Card from "./Card";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useCarStore } from "@/store/filterStore";
import PhonSide from "../Side/PhonSide";

export default function Main() {
  const cars = useCarStore((state) => state.cars);
  const allCars = useCarStore((state) => state.allCars);
  const applyFilters = useCarStore((state) => state.applyFilters);
  const sortOption = useCarStore((state) => state.sortOption);
  const setSortOption = useCarStore((state) => state.setSortOption);
  const sortCars = useCarStore((state) => state.sortCars);

  const models = useCarStore((state) => state.models);
  const colors = useCarStore((state) => state.colors);
  const trims = useCarStore((state) => state.trims);
  const bodyTypes = useCarStore((state) => state.bodyTypes);
  const transmissions = useCarStore((state) => state.transmissions);
  const fuelTypes = useCarStore((state) => state.fuelTypes);
  const driveTypes = useCarStore((state) => state.driveTypes);
  const cylinders = useCarStore((state) => state.cylinders);

  const setModels = useCarStore((state) => state.setModels);
  const setColors = useCarStore((state) => state.setColors);
  const setTrims = useCarStore((state) => state.setTrims);
  const setBodyTypes = useCarStore((state) => state.setBodyTypes);
  const setTransmissions = useCarStore((state) => state.setTransmissions);
  const setFuelTypes = useCarStore((state) => state.setFuelTypes);
  const setDriveTypes = useCarStore((state) => state.setDriveTypes);
  const setCylinders = useCarStore((state) => state.setCylinders);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSideOpen, setIsSideOpen] = useState(false);

  useEffect(() => {
    if (!searchTerm) {
      applyFilters();
    } else {
      const filtered = allCars.filter((car) => {
        const term = searchTerm.toLowerCase();

        return (
          (car.model?.toLowerCase() || "").includes(term) ||
          (car.trim?.toLowerCase() || "").includes(term) ||
          (car.bodyType?.toLowerCase() || "").includes(term) ||
          (car.color?.toLowerCase() || "").includes(term)
        );
      });

      useCarStore.setState({ cars: filtered });
    }
    sortCars(); // ترتيب بعد البحث
  }, [searchTerm, allCars, applyFilters, sortCars]);

  const removeFilter = (filterType: string, value: string | number) => {
    switch (filterType) {
      case "model": setModels(models.filter((m) => m !== value)); break;
      case "color": setColors(colors.filter((c) => c !== value)); break;
      case "trim": setTrims(trims.filter((t) => t !== value)); break;
      case "bodyType": setBodyTypes(bodyTypes.filter((b) => b !== value)); break;
      case "transmission": setTransmissions(transmissions.filter((t) => t !== value)); break;
      case "fuelType": setFuelTypes(fuelTypes.filter((f) => f !== value)); break;
      case "driveType": setDriveTypes(driveTypes.filter((d) => d !== value)); break;
      case "cylinders": setCylinders(cylinders.filter((c) => c !== value)); break;
    }
    applyFilters();
  };

  const clearAll = () => {
    setModels([]);
    setColors([]);
    setTrims([]);
    setBodyTypes([]);
    setTransmissions([]);
    setFuelTypes([]);
    setDriveTypes([]);
    setCylinders([]);
    setSearchTerm("");
    applyFilters();
  };

  const selectedFilters = [
    ...models.map((m) => ({ type: "model", value: m })),
    ...colors.map((c) => ({ type: "color", value: c })),
    ...trims.map((t) => ({ type: "trim", value: t })),
    ...bodyTypes.map((b) => ({ type: "bodyType", value: b })),
    ...transmissions.map((t) => ({ type: "transmission", value: t })),
    ...fuelTypes.map((f) => ({ type: "fuelType", value: f })),
    ...driveTypes.map((d) => ({ type: "driveType", value: d })),
    ...cylinders.map((c) => ({ type: "cylinders", value: c })),
  ];

  return (
    <div className="px-5">
      <div className="searchBox bg-white w-full flex p-3 gap-2.5 items-center h-[49px] rounded-md shadow">
        <FaSearch className="text-[#cdcdcd] text-[20px]" />
        <input
          className="w-full h-full outline-none text-sm"
          type="search"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-1 my-3 text-sm">
        <p className="text-[#797979]">Home /</p>
        <p className="text-[#797979]">Used /</p>
        <p className="text-[#0a0909] font-medium">Car</p>
      </div>

      <p className="text-[22px] font-semibold leading-snug">
        Used 2020 BMW M2 Coupe 2D in Orange, CA
      </p>

      <div className="flex justify-between items-center my-5 flex-row flex-wrap gap-3">
        <div className="flex gap-2 flex-wrap items-center">
          <p className="font-medium text-[12px]">Selected Filters:</p>

          {selectedFilters.map((filter, index) => (
            <div key={index} className="flex items-center gap-1 bg-[#323348] text-white text-[12px] px-[8px] py-[2px] rounded-[8px]">
              <span>{filter.value}</span>
              <button onClick={() => removeFilter(filter.type, filter.value)}>
                <IoClose className="text-white text-sm hover:text-[#cdcdd0]" />
              </button>
            </div>
          ))}

          {selectedFilters.length > 0 && (
            <button onClick={clearAll} className="text-sm text-[#323348] hover:underline ml-2">
              Clear All Filters
            </button>
          )}
        </div>

        <div className="flex gap-3 w-full lg:w-auto flex-col lg:flex-row items-center">
          <select
            id="mySelect"
            className="border capitalize rounded-md border-[#323348] text-[14px] px-[15px] py-[8px] cursor-pointer w-full lg:w-auto"
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              sortCars();
            }}
          >
            <option value="1">Price: Low to High</option>
            <option value="2">Mileage: Low to High</option>
            <option value="3">Price: High to Low</option>
            <option value="4">Newest Post</option>
          </select>

          <button className="border capitalize rounded-2xl border-[#323348] text-[14px] px-[15px] py-[8px] hover:bg-[#323348] hover:text-white transition w-full lg:w-auto">
            Save Search
          </button>

          <button
            className="sm:hidden border rounded-2xl border-[#323348] text-[14px] px-[15px] py-[8px] hover:bg-[#323348] hover:text-white transition w-full lg:w-auto"
            onClick={() => setIsSideOpen(true)}
          >
            Filters
          </button>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        {cars.length > 0 ? (
          cars.map((car) => <Card key={car.id} car={car} />)
        ) : (
          <p>No Cars Found</p>
        )}
      </div>

      <PhonSide isOpen={isSideOpen} onClose={() => setIsSideOpen(false)} />
    </div>
  );
}
