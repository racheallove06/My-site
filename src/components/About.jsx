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
          <h2 className="py-4 "> Who am I? </h2>
          <p className="py-2 text-gray-600">I am a Front-end developer</p>
          <p className="text-gray-600">
            My passion for web development was sparked when I enrolled in the
            SheCodes online course, where I discovered the exciting world of web
            development. Since then, I have been working on personal projects,
            and contributing to open source projects which have given me great
            experience.
          </p>
          <p className="mt-3 text-gray-600">
            {" "}
            Collaboration is something I truly enjoy, and I am always eager to
            work with others to bring out the best in our projects.
          </p>
          <p className="mt-3 text-gray-600">
            I am always excited to learn and adapt to new technologies and
            tools.Learning is a big part of my life, and I am constantly
            exploring new technologies.Currently, I am delving into Web 3
            development.
          </p>
          <p className="mt-3 text-gray-600">
            {" "}
            I am enthusiastic about the opportunity to wholeheartedly invest my
            skills and energy in a dynamic company, where I can evolve and
            flourish alongside the organization, actively contributing to its
            growth and success.{" "}
          </p>
          {/*<p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my recent projects
  </p>*/}
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
