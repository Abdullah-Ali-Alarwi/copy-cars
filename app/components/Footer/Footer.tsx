"use client"

import React, { useState } from 'react';
import SocialIcons from './socilIcons';



export default function Footer() {
  const Company = [
    "About CarNetWork",
    "Our Team",
    "Press",
    "Investor Relations",
    "Price Trends",
    "Careers"
  ];
  
  const Dealers = [
    "Dealer Signup",
    "Dealer Resources"
  ];
  
  const Terms = [
    "Do Not Sell My Personal Information",
    "Terms of Use",
    "Privacy",
    "Interest-Based Ads",
    "Security"
  ];
  
  const Help = [
    "Help",
    "Contact Us",
    "Buying a Car During Coronavirus",
    "Delivery"
  ];

  const Language = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese"
  ];

  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <footer className="bg-[#07819d] text-white p-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-6">
        {/* Company Column */}
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            {Company.map((item, index) => (
              <li key={index} className="hover:text-gray-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Dealers Column */}
        <div>
          <h3 className="font-bold mb-2">Dealers</h3>
          <ul className="space-y-1">
            {Dealers.map((item, index) => (
              <li key={index} className="hover:text-gray-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Terms Column */}
        <div>
          <h3 className="font-bold mb-2">Terms</h3>
          <ul className="space-y-1">
            {Terms.map((item, index) => (
              <li key={index} className="hover:text-gray-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="font-bold mb-2">Help</h3>
          <ul className="space-y-1">
            {Help.map((item, index) => (
              <li key={index} className="hover:text-gray-200 cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Language Column with Dropdown */}
        <div className="relative">
          <h3
            className="font-bold mb-2 cursor-pointer"
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
          >
            Language
          </h3>

          {isLanguageOpen && (
            <ul className="absolute mt-2 bg-white text-black rounded-md shadow-lg w-40 z-10">
              {Language.map((item, index) => (
                <li
                  key={index}
                  className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>


      
    </div>
    <SocialIcons />
    </footer>
  );
}
