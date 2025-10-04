// نستورد دالة "create" من مكتبة Zustand لإنشاء مخزن بيانات
import { create } from "zustand";

// نستورد بيانات السيارات من ملف خارجي
import { Cars as RawCars } from "@/db/cars";

// نضيف حقل جديد "bodyType" لكل سيارة ونعطيه قيمة فارغة ""
// هذا حتى يكون لجميع السيارات هذا الحقل جاهز
const Cars = RawCars.map(car => ({
  bodyType: "", // نوع الجسم (سيارة، SUV، إلخ) سيكون فارغ كبداية
  ...car        // باقي بيانات السيارة كما هي
}));

// تعريف شكل السيارة باستخدام TypeScript
interface Car {
  id: number;            // معرف فريد لكل سيارة
  model: string;         // موديل السيارة
  color: string;         // لون السيارة
  year: number;          // سنة الصنع
  price: number;         // سعر السيارة
  mileage: number;       // عدد الكيلومترات المقطوعة
  trim: string;          // نوع الفئة
  bodyType: string;      // نوع الجسم
  transmission: string;  // ناقل الحركة
  fuelType: string;      // نوع الوقود
  driveType: string;     // نظام الدفع
  mpgHighway: number;    // كفاءة الوقود على الطريق السريع
  cylinders: number;     // عدد الأسطوانات
  image: string;         // رابط صورة السيارة
}

// تعريف شكل المخزن (CarStore) باستخدام TypeScript
interface CarStore {
  cars: Car[];        // قائمة السيارات المعروضة حالياً
  allCars: Car[];     // جميع السيارات (النسخة الأصلية)

  // خيارات الفلاتر التي يمكن استخدامها
  models: string[];
  colors: string[];
  trims: string[];
  bodyTypes: string[];
  transmissions: string[];
  fuelTypes: string[];
  driveTypes: string[];
  cylinders: number[];

  sortOption: string; // خيار الترتيب (سعر، سنة، إلخ)

  // حدود الفلاتر
  maxPrice: number | null; // أعلى سعر
  yearRange: [number, number]; // نطاق السنوات
  maxMileage: number | null; // أعلى مسافة مقطوعة
  mpgRange: [number, number]; // نطاق كفاءة الوقود

  // دوال لتغيير البيانات في المخزن
  setCars: (cars: Car[]) => void;
  setModels: (models: string[]) => void;
  setColors: (colors: string[]) => void;
  setTrims: (trims: string[]) => void;
  setBodyTypes: (bodyTypes: string[]) => void;
  setTransmissions: (transmissions: string[]) => void;
  setFuelTypes: (fuelTypes: string[]) => void;
  setDriveTypes: (driveTypes: string[]) => void;
  setCylinders: (cylinders: number[]) => void;

  setSortOption: (option: string) => void; // تغيير خيار الترتيب
  sortCars: () => void; // ترتيب السيارات حسب الخيار

  setMaxPrice: (price: number | null) => void;
  setYearRange: (range: [number, number]) => void;
  setMaxMileage: (mileage: number | null) => void;
  setMpgRange: (range: [number, number]) => void;

  applyFilters: () => void; // تطبيق الفلاتر
  resetFilters: () => void; // إعادة تعيين الفلاتر للوضع الافتراضي
}

// إنشاء المخزن باستخدام Zustand
export const useCarStore = create<CarStore>((set, get) => ({
  // الحالة الابتدائية
  cars: Cars,         // السيارات المعروضة حالياً
  allCars: Cars,      // نسخة كاملة من جميع السيارات

  // الفلاتر تبدأ فارغة
  models: [],
  colors: [],
  trims: [],
  bodyTypes: [],
  transmissions: [],
  fuelTypes: [],
  driveTypes: [],
  cylinders: [],

  // الترتيب الافتراضي (1 = السعر من الأقل للأعلى)
  sortOption: "1",

  // حدود الفلاتر الافتراضية
  maxPrice: null,
  yearRange: [1920, new Date().getFullYear()],
  maxMileage: null,
  mpgRange: [0, 200],

  // دوال لتغيير البيانات
  setCars: (cars) => set({ cars }), // تعيين قائمة السيارات الجديدة
  setModels: (models) => set({ models }), // تعيين فلاتر الموديلات
  setColors: (colors) => set({ colors }), // تعيين فلاتر الألوان
  setTrims: (trims) => set({ trims }), // تعيين فلاتر الفئة
  setBodyTypes: (bodyTypes) => set({ bodyTypes }), // تعيين فلاتر نوع الجسم
  setTransmissions: (transmissions) => set({ transmissions }), // تعيين فلاتر ناقل الحركة
  setFuelTypes: (fuelTypes) => set({ fuelTypes }), // تعيين فلاتر نوع الوقود
  setDriveTypes: (driveTypes) => set({ driveTypes }), // تعيين فلاتر نظام الدفع
  setCylinders: (cylinders) => set({ cylinders }), // تعيين فلاتر عدد الأسطوانات

  setSortOption: (option) => set({ sortOption: option }), // تغيير خيار الترتيب

  // دالة ترتيب السيارات حسب خيار المستخدم
  sortCars: () => {
    const { cars, sortOption } = get(); // قراءة الحالة الحالية
    const sortedCars = [...cars]; // عمل نسخة من السيارات

    switch (sortOption) {
      case "1": // السعر من الأقل للأعلى
        sortedCars.sort((a, b) => a.price - b.price);
        break;
      case "2": // المسافة المقطوعة الأقل للأعلى
        sortedCars.sort((a, b) => a.mileage - b.mileage);
        break;
      case "3": // السعر من الأعلى للأقل
        sortedCars.sort((a, b) => b.price - a.price);
        break;
      case "4": // الأحدث أولاً
        sortedCars.sort((a, b) => b.year - a.year);
        break;
    }

    set({ cars: sortedCars }); // تحديث القائمة بعد الترتيب
  },

  // إعداد حدود الفلاتر
  setMaxPrice: (price) => set({ maxPrice: price }),
  setYearRange: (range) => set({ yearRange: range }),
  setMaxMileage: (mileage) => set({ maxMileage: mileage }),
  setMpgRange: (range) => set({ mpgRange: range }),

  // تطبيق الفلاتر على السيارات
  applyFilters: () => {
    const {
      allCars,
      models, colors, trims, bodyTypes, transmissions,
      fuelTypes, driveTypes, cylinders,
      maxPrice, yearRange, maxMileage, mpgRange
    } = get();

    const filtered = allCars.filter((car) => {
      if (models.length && !models.includes(car.model)) return false; // فحص الموديل
      if (colors.length && !colors.includes(car.color.toLowerCase())) return false; // فحص اللون
      if (trims.length && !trims.includes(car.trim)) return false; // فحص الفئة
      if (bodyTypes.length && !bodyTypes.includes(car.bodyType)) return false; // فحص نوع الجسم
      if (transmissions.length && !transmissions.includes(car.transmission)) return false; // فحص ناقل الحركة
      if (fuelTypes.length && !fuelTypes.includes(car.fuelType)) return false; // فحص نوع الوقود
      if (driveTypes.length && !driveTypes.includes(car.driveType)) return false; // فحص نظام الدفع
      if (cylinders.length && !cylinders.includes(car.cylinders)) return false; // فحص عدد الأسطوانات
      if (maxPrice !== null && car.price > maxPrice) return false; // فحص السعر
      if (car.year < yearRange[0] || car.year > yearRange[1]) return false; // فحص السنة
      if (maxMileage !== null && car.mileage > maxMileage) return false; // فحص المسافة
      if (mpgRange.length === 2 && (car.mpgHighway < mpgRange[0] || car.mpgHighway > mpgRange[1])) return false; // فحص كفاءة الوقود

      return true; // السيارة تمر إذا لم تفشل في أي شرط
    });

    set({ cars: filtered }); // تحديث القائمة بالسيارات التي مرت الفلترة
    get().sortCars(); // ترتيب النتائج بعد الفلترة
  },

  // إعادة تعيين جميع الفلاتر والوضع الافتراضي
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
      cars: Cars,       // إعادة جميع السيارات
      sortOption: "1"   // إعادة خيار الترتيب الافتراضي
    });
  },
}));