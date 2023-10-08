import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const Main = () => {
  return (
    <div id="main" className="w-full h-screen text-center  ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-[200px]">
            Build. Optimize. Thrive. Succeed
          </p>
          <h1 className="text-gray-700 my-2">
            Hi, I'm <span className="text-[#12BCDA]">Racheal</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {" "}
            Meet Racheal,who is wholeheartedly committed to turns ideas into
            beautiful web experiences.She is dedicated to making her web the
            best and she is currently contributing to open source projects and
            learning a bit of web 3.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <FaGithub />
            </div>

            <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsPersonFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
