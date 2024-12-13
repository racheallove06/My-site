import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";                                               
import { AiOutlineMail } from "react-icons/ai";                                                      
import { BsPersonFill } from "react-icons/bs";                                                                                                               
import { HiOutlineChevronDoubleUp } from "react-icons/hi";                                                                                    
import Link from "next/link";                      
const Contact = () => {
  return (                 
    <div id="contact" className="w-full lg:h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#12bcda] ">
          Contact Me
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-2 ">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src="/assets/developer.png"
                  alt="/"
                  width="600"
                  height="400"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-4">Racheal Nyawira</h2>
                <p>Web Develper</p>
                <p className="py-4">
                  I am willing and flexible to take any opportunity that may
                  better fit my qualifications
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 ">Connect With Me </p>
                <div className="flex items-center justify-between py-4">
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

                  {/*} <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsPersonFill />
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
          {/*Right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className=" flex flex-col">
                    <label className="uppercase text-sm py-4">Name</label>
                    <input
                      className="border-2 border-gray-300 rounded-lg flex p-3"
                      type="text"
                    />
                  </div>

                  <div className=" flex flex-col">
                    <label className="uppercase text-sm py-4">
                      Phone Number
                    </label>
                    <input
                      className="border-2 border-gray-300 rounded-lg flex p-3"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  {" "}
                  <label className="uppercase text-sm py-4">Email</label>
                  <input
                    className="border-2 border-gray-300 rounded-lg flex p-3"
                    type="email"
                  />
                </div>

                {/*<div className="flex flex-col py-2">
                  {" "}
                  <label className="uppercase text-sm py-4">Email</label>
                  <input
                    className="border-2 border-gray-300 rounded-lg flex p-3"
                    type="text"
                  />
  </div>*/}

                <div className="flex flex-col py-2">
                  {" "}
                  <label className="uppercase text-sm py-4">Message</label>
                  <textarea
                    className=" border-2 p-3 rounded-lg border-gray-300"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full text-gray-100 p-4 mt-4 ">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          {" "}
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
              {" "}
              <HiOutlineChevronDoubleUp className="text-[#32bed6]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
