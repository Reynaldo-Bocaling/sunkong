import React from "react";
import { howtobuy } from "../constant";

const HowToBuy = () => {
  return (
    <div className="w-full relative bg-gradient-to-bl from-orange-600 via-red-600 to-rose-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-12">
        <h1 className="text-5xl md:text-8xl text-white  ">HOW TO BUY</h1>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7 w-full mt-12 px-7">
          {howtobuy.map((item, index) => (
            <li
              key={index}
              className="w-full md:w-1/3 bg-yellow-500 border border-black rounded-xl p-5 h-[15rem]"
            >
              <div className="p-2 bg-yellow-500">
                <div className="flex items-center justify-between px-2">
                  <div className="flex gap-2 ">
                    <div className="h-5 w-5 bg-red-500 rounded-full"></div>
                    <div className="h-5 w-5 bg-[#ffdb28] rounded-full"></div>
                    <div className="h-5 w-5 bg-green-500 rounded-full"></div>
                  </div>
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                </div>
              </div>
              <div className="w-full p-4 bg-white rounded-xl mt-5 h-[7rem]">
                <p className="text-base text-center tracking-wider normal font-semibold">
                  {item.value}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowToBuy;
