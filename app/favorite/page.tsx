"use client";

import React, { useEffect } from "react";
import { useFavoriteCarsStore } from "@/store/favoriteCarsStore";
import Card from "../search/Main/Card";


export default function Favorite() {
  const favoriteCars = useFavoriteCarsStore((state) => state.favoriteCars);
  const loadFavorites = useFavoriteCarsStore((state) => state.loadFavorites);

  // تحميل السيارات المفضلة من LocalStorage عند دخول الصفحة
  useEffect(() => {
    loadFavorites();
  }, [loadFavorites]);

  return (
    <div className="mt-[70px] mb-5 px-5">
      <h1 className="text-2xl font-bold mb-5">My Favorite Cars</h1>

      {favoriteCars.length === 0 ? (
        <p className="text-gray-500">No favorite cars yet.</p>
      ) : (
        <div className="flex flex-wrap gap-5">
          {favoriteCars.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
}
