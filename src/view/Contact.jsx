import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full pb-10">
      <div className="container mx-auto">
        <div className="flex items-center justify-center  gap-10 px-7 mt-5">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="h-20 w-20 rounded-full bg-[#f23138] flexCenter"
            >
              <img src={item.img} className={`${item.variant} `} alt="" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
