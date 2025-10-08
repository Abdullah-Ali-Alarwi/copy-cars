// app/loading.tsx
import Image from "next/image";
import preloader from "@/public/images/preloader.gif";

export default function Loading() {
  return (
    <div className="mt-[200px] h-full flex justify-center items-center">
      <Image src={preloader} width={200} height={200} alt="preloader" />
    </div>
  );
}
