"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFavoriteCarsStore } from "@/store/favoriteCarsStore"; // مخزن المفضلات

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const favoriteCars = useFavoriteCarsStore((state) => state.favoriteCars);
  const loadFavorites = useFavoriteCarsStore((state) => state.loadFavorites);

  // تحميل المفضلات عند بداية التطبيق
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  const links = [
    { name: "Home", href: "/home" },
    { name: "Search", href: "/search" },
    { name: "Account", href: "/account" },
    { name: "Details", href: "/details" },
    { name: "Favorite", href: "/favorite" },
    { name: "Login", href: "/login" },
    { name: "Signin", href: "/signin" },
  ];

  return (
    <>
     
      <nav className="fixed top-0 left-0 w-full bg-[color:var(--mainColor)] bg-opacity-50 border-b border-white z-50">
        <div className="container mx-auto flex items-center justify-between py-2 lg:py-4 px-4 lg:px-0">
          
          <Link href="/home">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={167}
              height={50}
              className="w-[167px] h-auto"
            />
          </Link>

       
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

          <div className="hidden lg:flex items-center space-x-8">
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

    
            <div className="relative">
              <Link href="/favorite">
                <Image
                  src="/images/love.svg"
                  alt="Love"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
              </Link>
              {favoriteCars.length > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center rounded-full bg-red-500 w-5 h-5 text-xs text-white">
                  {favoriteCars.length}
                </div>
              )}
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
                Account
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[90vh]" : "max-h-0"
          } bg-[color:var(--mainColor)] bg-opacity-90 w-[90%] mx-auto mt-2 rounded-lg`}
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

   
            <div className="relative w-full flex justify-center mt-2">
              <Link href="/favorite">
                <Image
                  src="/images/love.svg"
                  alt="Love"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px]"
                />
              </Link>
              {favoriteCars.length > 0 && (
                <div className="absolute top-0 right-0 flex items-center justify-center rounded-full bg-red-500 w-5 h-5 text-xs text-white">
                  {favoriteCars.length}
                </div>
              )}
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
                Account
              </button>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}
