import React from "react";
import { AiOutlineMail } from "react-icons/ai";                                     
import { FaLinkedinIn, FaGithub } from "react-icons/fa";                                       
const Main = () => {                                                                                                               
  return (                                         
    <div id="main" className="w-full h-screen text-center  ">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">                
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 mt-[200px] mb-4">
            Build. Collaborate. Grow. Succeed
          </p>
          <h1 className="text-gray-700 my-2">
            Hi, I am <span className="text-[#12BCDA]">Racheal,</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Web Developer.</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {" "}
            I am wholeheartedly committed to solve problems using code and
            turning ideas into beautiful web experiences.I am currently
            contributing to open source projects and currently learning MERN
            stack.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-6">
            <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="https://www.linkedin.com/in/racheal-muchiri-455665249/">
                <FaLinkedinIn />{" "}
              </a>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <a href="https://github.com/racheallove06">
                {" "}
                <FaGithub />{" "}
              </a>
            </div>

            <div className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a href="mailto:rachealloveo6@gmail.com">
                {" "}
                <AiOutlineMail />
              </a>
            </div>

            {/*<div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsPersonFill /> 
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
