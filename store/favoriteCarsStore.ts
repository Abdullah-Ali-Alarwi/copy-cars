// favoriteCarsStore.ts
import { create } from "zustand";

// تعريف نوع بيانات السيارة
export interface Car {
  id: number;
  model: string;
  color: string;
  year: number;
  price: number;
  mileage: number;
  trim: string;
  bodyType: string;
  transmission: string;
  fuelType: string;
  driveType: string;
  mpgHighway: number;
  cylinders: number;
  image: string;
}

// تعريف المخزن الخاص بالمفضلات
interface FavoriteCarsStore {
  favoriteCars: Car[];                     // قائمة السيارات المفضلة
  addFavorite: (car: Car) => void;        // إضافة سيارة للمفضلة
  removeFavorite: (carId: number) => void; // إزالة سيارة من المفضلة
  sortFavorites: (option: string) => void; // ترتيب السيارات المفضلة
  loadFavorites: () => void;               // تحميل المفضلات من LocalStorage
  isFavorite: (carId: number) => boolean; // التحقق إذا السيارة مفضلة
}

// إنشاء المخزن
export const useFavoriteCarsStore = create<FavoriteCarsStore>((set, get) => ({
  favoriteCars: [],

  addFavorite: (car) => {
    const exists = get().favoriteCars.find(c => c.id === car.id);
    if (!exists) {
      const updated = [...get().favoriteCars, car];
      set({ favoriteCars: updated });
      localStorage.setItem("favoriteCars", JSON.stringify(updated));
    }
  },

  removeFavorite: (carId) => {
    const updated = get().favoriteCars.filter(car => car.id !== carId);
    set({ favoriteCars: updated });
    localStorage.setItem("favoriteCars", JSON.stringify(updated));
  },

  sortFavorites: (option) => {
    const sorted = [...get().favoriteCars];

    switch (option) {
      case "1":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "2":
        sorted.sort((a, b) => a.mileage - b.mileage);
        break;
      case "3":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "4":
        sorted.sort((a, b) => b.year - a.year);
        break;
    }

    set({ favoriteCars: sorted });
    localStorage.setItem("favoriteCars", JSON.stringify(sorted));
  },

  loadFavorites: () => {
    const stored = localStorage.getItem("favoriteCars");
    if (stored) {
      try {
        set({ favoriteCars: JSON.parse(stored) });
      } catch (e) {
        console.error("Failed to load favorite cars", e);
      }
    }
  },

  isFavorite: (carId) => {
    return get().favoriteCars.some(car => car.id === carId);
  }
}));
