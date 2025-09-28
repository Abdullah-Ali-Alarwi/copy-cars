"use client";

import React from "react";
import Place from "./Place";
import Filter from "./Filter";
import FilterList from "./FilterList";
import { IoClose } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhonSide({ isOpen, onClose }: Props) {
  return (
    <>
      {/* الخلفية */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
          onClick={onClose}
        />
      )}

      {/* السلايد */}
      <div
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 sm:hidden
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-3">
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>

        <div className="overflow-y-auto h-full px-3 pb-6">
          <Place />
          <Filter />
          <FilterList />
        </div>
      </div>
    </>
  );
}
