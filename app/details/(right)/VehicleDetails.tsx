"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

// الصفحات (كمبوننتات مستقلة)
import VehicleDetails from "../pages/VehicleDetails"
import Features from "../pages/Features"
import Description from "../pages/Description"

export default function SharedLayoutAnimation() {
  const tabs = [
    { label: "Vehicle Details", page: <VehicleDetails /> },
    { label: "Features", page: <Features /> },
    { label: "Description", page: <Description /> },
  ]

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className=" w-full lg:w-[480px]  p-[15px] h-[500px] rounded-xl bg-white flex flex-col">
      {/* التابات */}
      <nav className="bg-white px-2 pt-1 h-11">
        <ul className="flex w-full border-b border-gray-200">
          {tabs.map((item) => (
            <motion.li
              key={item.label}
              className={`flex-1 relative px-4 py-2 text-sm font-medium text-gray-800 cursor-pointer flex items-center justify-center
                ${
                  item === selectedTab
                    ? "border-b-2 border-gray-400 "
                    : "text-gray-600"
                }`}
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* الكونتنت */}
      <main className="flex-1 flex justify-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab.label}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full flex justify-center mt-3"
          >
            {selectedTab.page}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
