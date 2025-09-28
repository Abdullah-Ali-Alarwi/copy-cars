import { create } from "zustand";
import { Cars as RawCars } from "@/db/cars";

// Ensure all cars have the required 'bodyType' property
const Cars = RawCars.map(car => ({
  bodyType: "", // Provide a default or map from another property if available
  ...car,
}));

interface Car {
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

interface CarStore {
  cars: Car[];
  allCars: Car[];

  models: string[];
  colors: string[];
  trims: string[];
  bodyTypes: string[];
  transmissions: string[];
  fuelTypes: string[];
  driveTypes: string[];
  cylinders: number[];

  maxPrice: number | null;
  yearRange: [number, number];
  maxMileage: number | null;
  mpgRange: [number, number];

  setCars: (cars: Car[]) => void;
  setModels: (models: string[]) => void;
  setColors: (colors: string[]) => void;
  setTrims: (trims: string[]) => void;
  setBodyTypes: (bodyTypes: string[]) => void;
  setTransmissions: (transmissions: string[]) => void;
  setFuelTypes: (fuelTypes: string[]) => void;
  setDriveTypes: (driveTypes: string[]) => void;
  setCylinders: (cylinders: number[]) => void;

  setMaxPrice: (price: number | null) => void;
  setYearRange: (range: [number, number]) => void;
  setMaxMileage: (mileage: number | null) => void;
  setMpgRange: (range: [number, number]) => void;

  applyFilters: () => void;
  resetFilters: () => void;
}

export const useCarStore = create<CarStore>((set, get) => ({
  cars: Cars,
  allCars: Cars,

  models: [],
  colors: [],
  trims: [],
  bodyTypes: [],
  transmissions: [],
  fuelTypes: [],
  driveTypes: [],
  cylinders: [],

  maxPrice: null,
  yearRange: [1920, new Date().getFullYear()],
  maxMileage: null,
  mpgRange: [0, 200],

  setCars: (cars) => set({ cars }),
  setModels: (models) => set({ models }),
  setColors: (colors) => set({ colors }),
  setTrims: (trims) => set({ trims }),
  setBodyTypes: (bodyTypes) => set({ bodyTypes }),
  setTransmissions: (transmissions) => set({ transmissions }),
  setFuelTypes: (fuelTypes) => set({ fuelTypes }),
  setDriveTypes: (driveTypes) => set({ driveTypes }),
  setCylinders: (cylinders) => set({ cylinders }),

  setMaxPrice: (price) => set({ maxPrice: price }),
  setYearRange: (range) => set({ yearRange: range }),
  setMaxMileage: (mileage) => set({ maxMileage: mileage }),
  setMpgRange: (range) => set({ mpgRange: range }),

  applyFilters: () => {
    const {
      allCars,
      models, colors, trims, bodyTypes, transmissions,
      fuelTypes, driveTypes, cylinders,
      maxPrice, yearRange, maxMileage, mpgRange
    } = get();

    const filtered = allCars.filter((car) => {
      if (models.length && !models.includes(car.model)) return false;
      if (colors.length && !colors.includes(car.color.toLowerCase())) return false;
      if (trims.length && !trims.includes(car.trim)) return false;
      if (bodyTypes.length && !bodyTypes.includes(car.bodyType)) return false;
      if (transmissions.length && !transmissions.includes(car.transmission)) return false;
      if (fuelTypes.length && !fuelTypes.includes(car.fuelType)) return false;
      if (driveTypes.length && !driveTypes.includes(car.driveType)) return false;
      if (cylinders.length && !cylinders.includes(car.cylinders)) return false;
      if (maxPrice !== null && car.price > maxPrice) return false;
      if (car.year < yearRange[0] || car.year > yearRange[1]) return false;
      if (maxMileage !== null && car.mileage > maxMileage) return false;
      if (mpgRange.length === 2 && (car.mpgHighway < mpgRange[0] || car.mpgHighway > mpgRange[1])) return false;

      return true;
    });

    set({ cars: filtered });
  },

  resetFilters: () => {
    set({
      models: [],
      colors: [],
      trims: [],
      bodyTypes: [],
      transmissions: [],
      fuelTypes: [],
      driveTypes: [],
      cylinders: [],
      maxPrice: null,
      yearRange: [1920, new Date().getFullYear()],
      maxMileage: null,
      mpgRange: [0, 200],
      cars: Cars
    });
  },
}));
