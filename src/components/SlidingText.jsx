import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full pu-4 overflow-hidden  absolute top-14 md:top-[15rem]">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p
            key={i}
            className="text-yellow-500 text-xl md:text-3xl font-semibold px-12 z-10"
          >
            BUY NOW
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
