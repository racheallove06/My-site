"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import commercialimg from "../../../../public/assets/commercial.png";

const commercial = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full ">
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center  w-full h-full px-2 2xl:px-16">
          <Link href="/">
            {" "}
            <Image
              src="/assets/bglogoo.png"
              alt="logo"
              width="125"
              height="50"
            />
          </Link>

          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b text-[#32bed6]">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li className="ml-10 text-sm uppercase hover:border-b text-[#32bed6]">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li className="ml-10 text-sm uppercase hover:border-b text-[#32bed6]">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li className="ml-10 text-sm uppercase hover:border-b text-[#32bed6]">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 text-sm uppercase hover:border-b text-[#32bed6]">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="md:hidden" onClick={handleNav}>
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>
        <div
          className={
            nav
              ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : " "
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-400 "
            }
          ></div>{" "}
        </div>{" "}
      </div>

      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0  w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          className=" absolute z-1 "
          layout="fill"
          objectFit="cover"
          src={commercialimg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[10%] right-[10%]  translate-x-[-50%] translaye-y-[-50%] text-white pb-5 z-10">
          <h2>Commercial Website</h2>
          <h3 className="pb-9">React JS | Tailwind | </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 absolute left-[10%] right-[10%]  ">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p>
            The React Weather App is a user-friendly, responsive web application
            designed to provide real-time weather information to users with ease
            and convenience. Built with React.js, this project utilizes a range
            of modern web development technologies to fetch and display
            up-to-date weather data from various locations around the world.
            Users can simply enter a location or use geolocation services to
            retrieve accurate weather forecasts, including temperature,
            humidity, wind speed, and more. With an intuitive and visually
            appealing interface, the React Weather App offers a seamless user
            experience for staying informed about current weather conditions.
          </p>
          <button className="py-2 px-8 mt-4 mr-8">Demo</button>
          <button className="py-2 px-8 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                React
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default commercial;
