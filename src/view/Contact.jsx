import React from "react";
import { socials } from "../constant";

const Contact = () => {
  return (
    <section id="contact" className="relative w-full">
      <div className="container mx-auto bg-red-500">
        <div className="flex items-center justify-between md:w-[32rem] gap-2 px-7 mt-5">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.url}
              className="p-3 rounded-full bg-[#7017b5]"
            >
              <img
                src={item.img}
                className="w-10 h-10 md:w-12 md:h-12"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
