import React from "react";
import SlidingText from "../components/SlidingText";

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#232323] ">
      <img
        src="/img/about-header.png"
        alt=""
        className="relative w-full -mt-5 z-20 mb-4"
      />
      <div className="about-container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-full h-auto md:h-[40rem] px-14">
        <div className="w-full md:w-1/2 py-10 md:pb-40">
          <h1 className="text-5xl md:text-8xl text-black font-semibold  mb-12 mt-20 text-center ">
            ABOUT US
          </h1>
          <p className="text-whsite text-lg tracking-wider font-mono">
            SunKong, the only Ape Tron deserves. Following Sundog & Suncat,
            SunKong aims to melts faces and send it straight to the Sun
          </p>
          <button className="btn-style text-xl  mt-7 z-20 py-4 px-12 font-extrabold rotate-6">
            Buy Now
          </button>
        </div>
        <div className="w-full md:w-1/2 pb-32 md:pb-0">
          <img
            src="/img/logo.png"
            alt=""
            className="w-[35rem] md:w-[25rem] -mt-7 z-20 border-2 border-red-500 rounded-full"
          />
        </div>
      </div>
      <SlidingText />
    </section>
  );
};

export default About;
