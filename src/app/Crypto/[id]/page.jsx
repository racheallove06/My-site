"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import crypto from "../../../../public/assets/shopnow.png";

const Page = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full ">
      <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex justify-between items-center  w-full h-full px-2 2xl:px-16">
          {/*} <Link href="/">
            {" "}
            <Image
              src="/assets/bglogoo.png"
              alt="logo"
              width="125"
              height="50"
            />
  </Link>*/}

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
          src={crypto}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[10%] right-[10%]  translate-x-[-50%] translaye-y-[-50%] text-white pb-5 z-10">
          <h2>Commercial Website</h2>
          <h3 className="pb-9">HTML | CSS | Javascript</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 absolute left-[10%] right-[10%]  ">
        <div className="col-span-4">
          <h2>Project Overview</h2>
          <p className="mt-3 text-gray-600">
            Spearheaded the development of a cutting-edge e-commerce platform
            using a tech stack consisting of HTML, CSS, and JavaScript.
            <br /> . Crafted a visually stunning and intuitive user interface,
            employing modern design principles and responsive web development
            techniques to ensure seamless user experiences across various
            devices.
            <br /> . Leveraged JavaScript to implement dynamic and interactive
            features, enhancing user engagement and facilitating a smooth
            shopping experience.
            <br /> . Implemented robust SEO strategies to optimize the website
            visibility on search engines, incorporating meta tags, structured
            data, and other SEO best practices.
            <br /> . Employed HTML5 and CSS3 to build a scalable and
            cross-browser-compatible website, prioritizing performance and
            accessibility for a diverse user base.
            <br /> . Integrated secure payment gateways, ensuring the safety and
            privacy of user transactions.
            <br /> . Utilized server-side rendering techniques and optimized
            loading speeds for improved SEO and user satisfaction.
          </p>
          <button className="py-2 px-8 mt-4 mr-8">
            {" "}
            <a href="https://shop-now-sage.vercel.app/"> Demo</a>
          </button>
          <button className="py-2 px-8 mt-4">
            {" "}
            <a href="https://github.com/racheallove06/Shop-Now">Code </a>
          </button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                SEO
              </p>
              {/* <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                Axios
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                {" "}
                <RiRadioButtonLine className="pr-1" />
                Coin gecko Api
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
