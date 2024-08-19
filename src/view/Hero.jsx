import React from "react";
import { socials } from "../constant";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-[#f11d32] pb-20">
      <div className="container mx-auto  flex flex-col items-center justify-end  py-7">
        <h1 className="text-white text-3xl ">
          The Only <span className="bg-yellow-400 px-2">Ape</span> to the Sun
        </h1>
        <h1 className="text-7xl md:text-[9rem] text-white bg-blue-500s leading-[9rem]">
          SUNKONG
        </h1>
        <img
          src="/img/logo.png"
          alt=""
          className="w-[20rem] md:w-[32rem] -mt-7 z-20"
        />
        <button className="btn-style text-xl -mt-16 z-20 py-4 px-12 font-extrabold rotate-6">
          Buy Now
        </button>
      </div>

      {/* <div className="max-w-7xl mx-auto flexColCenter mt-14 gap-9 bg-blue-500s">
        <h1 className="title text-xl md:text-7xl font-bold text-white">
          The Only Ape to the Sun
        </h1>
        <div className="flex items-center justify-between md:w-[32rem] gap-7 px-7 mt-5">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="p-3 rounded-full bg-[#f04752]"
            >
              <img
                src={item.img}
                className="w-10 h-10 md:w-12 md:h-12"
                alt=""
              />
            </a>
          ))}
        </div>
        <button class="text-xl text-white font-bold py-4 px-20 rounded-full border-2 border-black bg-yellow-500">
          Buy Now
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
