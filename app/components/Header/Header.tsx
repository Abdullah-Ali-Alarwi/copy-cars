"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: "New", href: "#" },
    { name: "Used", href: "/search" },
    { name: "Internet", href: "/Internet" },
    { name: "Specials", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Service", href: "#" },
    { name: "Parts", href: "#" },
  ];

  return (
    <>
      {/* الهيدر ثابت */}
      <nav className="fixed top-0 left-0 w-full bg-[color:var(--mainColor)] bg-opacity-50 border-b border-white z-50">
        <div className="container mx-auto flex items-center justify-between  py-1 lg:py-4 w-[90%]">
         
         <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={0}
            height={0}
            className="w-[167px] h-auto"
          /></Link>

          {/* زر المينيو للجوال */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center font-medium text-lg text-white"
            >
              <span className="text-[12px]">Menu</span>
              <div className="relative mt-1 w-[100%] h-4">
                <span
                  className={`block h-[2px] bg-white transform transition duration-300 ease-in-out ${
                    isOpen
                      ? "rotate-45 absolute top-1/2 left-0 w-full"
                      : "rotate-0 relative"
                  }`}
                ></span>
                <span
                  className={`block h-[2px] bg-white transform transition duration-300 ease-in-out ${
                    isOpen
                      ? "-rotate-45 absolute top-1/2 left-0 w-full"
                      : "rotate-0 relative mt-2"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* روابط الديسكتوب */}
          <div className="hidden lg:flex space-x-8 items-center">
            <ul className="flex space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white hover:underline"
                >
                  {link.name}
                </Link>
              ))}
            </ul>

            <div className="img-fluid relative">
              <Image
                src="/images/love.svg"
                alt="Love"
                width={40}
                height={40}
                className="inline w-[40px] h-[40px]"
              />
              <div className="absolute top-1 left-2 -mt-3 ml-5 flex items-center justify-center rounded-md bg-red-500  px-1  h-5">
                <span className="text-white text-sm">99</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="hover:bg-white text-white border border-white hover:text-[color:var(--mainColor)] px-4 py-2 rounded">
                For Dealers
              </button>
              <button className="bg-white text-[color:var(--mainColor)] px-4 py-2 rounded flex items-center">
                <Image
                  src="/images/user.svg"
                  alt="User"
                  width={20}
                  height={20}
                  className="inline mr-2"
                />
                For Dealers
              </button>
            </div>
          </div>
        </div>

        {/* المينيو للجوال */}
        <div
          className={`lg:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${
            isOpen ? "max-h-[90vh]" : "max-h-0"
          } bg-[color:var(--mainColor)] bg-opacity-90 w-[90%] mx-auto mt-2 rounded-lg `}
        >
          <ul className="flex flex-col space-y-3 py-4 overflow-y-auto max-h-[80vh] px-4">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white border-b border-white p-2 hover:bg-[#abc4ce6e] rounded"
              >
                {link.name}
              </Link>
            ))}

            <div className="img-fluid w-full mt-2 flex justify-st relative">
              <Image
                src="/images/love.svg"
                alt="Love"
                width={40}
                height={40}
                className="inline w-[40px] h-[40px]"
              />
              <div className="absolute top-1 left-2 -mt-3 ml-5 flex items-center justify-center rounded-md bg-red-500  px-1  h-5">
                <span className="text-white text-sm">99</span>
              </div>
            </div>

            <div className="flex flex-col space-y-2 mt-4">
              <button className="hover:bg-white text-white border border-white hover:text-[color:var(--mainColor)] px-4 py-2 rounded w-full">
                For Dealers
              </button>
              <button className="bg-white text-[color:var(--mainColor)] px-4 py-2 rounded flex items-center w-full justify-center">
                <Image
                  src="/images/user.svg"
                  alt="User"
                  width={20}
                  height={20}
                  className="inline mr-2"
                />
                For Dealers
              </button>
            </div>
          </ul>
        </div>
      </nav>

 
    </>
  );
}
