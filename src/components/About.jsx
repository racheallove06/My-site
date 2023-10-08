import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {" "}
          <p className="uppercase text-xl tracking-widest text-[#12BCDA]">
            About Me{" "}
          </p>
          <h2 className="py-4 "> Who I am </h2>
          <p className="py-2 text-gray-600">I'm not your normal developer</p>
          <p className="text-gray-600">
            {" "}
            "Meet [Name], a passionate frontend developer with an unwavering
            commitment to crafting captivating user experiences. With a keen eye
            for design and a knack for translating ideas into elegant,
            functional interfaces, [Name] brings creativity and technical
            expertise to every project. [He/She] is dedicated to staying at the
            forefront of web technologies and is on a mission to make the
            deframes, and sipping on coffee for that extra dose of inspiration."
          </p>
          <p>
            "Meet [Name], a passionate frontend developer with an unwavering
            commitment to crafting captivating user experiences. With a keen eye
            for design and a knack for translating ideas into elegant,
            functional interfaces, [Name] brings creativity and technical
            expertise to every project. [He/She] is dedicated to staying at the
            forefront of web technologies and is on a mission to make the
            deframes, and sipping on coffee for that extra dose of inspiration."
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my recent projects
          </p>
        </div>
        <div className=" w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-start justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image
            className="rounded-xl"
            src="/assets/about.jpg"
            alt="logo"
            width="350"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
