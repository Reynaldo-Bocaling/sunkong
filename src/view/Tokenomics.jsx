import React from "react";
import { howtobuy, tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section className="w-full relative bg-gradient-to-bl from-orange-600 via-red-600 to-rose-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center py-12">
        <h1 className="text-5xl md:text-8xl text-white  ">TOKENOMICS</h1>
        <ul className="flex flex-col md:flex-row items-center justify-center gap-7 w-full mt-12 px-7">
          {tokenomics.map((item, index) => (
            <li
              key={index}
              className="w-full md:w-1/3 p-5 flex flex-col items-center justify-center"
            >
              <h1 className="text-white text-7xl font-bold">{item.value}</h1>
              <h1 className="text-red-00 text-4xl font-bold mt-4">
                {item.name}
              </h1>
            </li>
          ))}
        </ul>
        <img src="/img/banner.jpg" className="mt-20" alt="" />
      </div>
    </section>
  );
};

export default Tokenomics;
