import React from "react";
import Sidle from "./Side/Sidle";
import Main from "./Main/Main";


export default function Page() {
  return (
    <div className="flex h-screen w-screen mt-18 overflow-y-hidden">
      {/* القائمة الجانبية */}
      <div className="w-[300px]   bg-white text-white p-1 hidden lg:block">
        <Sidle />
       
      </div>
   

      {/* المحتوى الرئيسي */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        <Main />
      </div>
    </div>
  );
}
