"use client";
import React, { useState } from "react";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

export default function RandomAskedQuestions() {
  const [questions] = useState([
    { id: 1, question: "Lorem ipsum is placeholder text commonly?" },
    { id: 2, question: "Lorem ipsum is placeholder text commonly used in the?" },
    { id: 3, question: "Lorem ipsum is placeholder text commonly used in the graphic?" },
    { id: 4, question: "Lorem ipsum placeholder?" },
  ]);

  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="my-10">
      {/* العنوان */}
      <div className="flex items-center my-10 text-[25px] lg:text-[35px] uppercase text-white p-5 bg-[#07819d] font-bold rounded">
        <div className="space-y-3 my-5 w-[100%] lg:w-[80%] mx-auto">
          <LuMessageCircleQuestion className="inline  text-[35px] mr-3" />
        Randomly Asked Questions
        </div>
      </div>

      {/* الأسئلة */}
      <div className="space-y-3  w-[80%] mx-auto my-5  ">
        {questions.map((q) => (
          <div
            key={q.id}
            className="bg-[#fafafa]  rounded-md overflow-hidden "
          >
         
          <button
  onClick={() => toggleQuestion(q.id)}
  className="w-full text-left p-4 flex justify-between items-center"
>
  <span className="text-[#080a0a] font-bold text-[20px]">{q.question}</span>
  <IoIosArrowDown
    className={`w-6 h-6 transform transition-transform duration-300 ${
      activeId === q.id ? "rotate-180 text-[#07819d]" : "rotate-0 text-[#080a0a]"
    }`}
  />
</button>


           
            <div
              className={`overflow-hidden transition-all duration-500 ${
                activeId === q.id ? "max-h-96 p-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
                harum suscipit ut, perspiciatis quo hic provident aliquam velit
                autem error cum saepe accusantium voluptas culpa aut inventore
                tenetur obcaecati pariatur.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
