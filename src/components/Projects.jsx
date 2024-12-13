"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import reactWeatherApp from "../../public/assets/exclusive.png";
import commercial from "../../public/assets/commercial.png";
import dashboard from "../../public/assets/modern.png";
import web3 from "../../public/assets/hoobank.png";
import cryptoo from "../../public/assets/shopnow.png";
import sweet from "../../public/assets/sweet.png";
import airforce from "../../public/assets/airforce.png";
import glowing from "../../public/assets/glowing.png";
import ProjectItem from "./ProjectItem";
import eats from "../../public/assets/eats.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#12BCDA] ">
          Projects
        </p>
        <h2 className="py-4">
          Projects that I have built
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              projectImage={eats}
              projectUrl="/Eats/123"
              title="TastyEats"
              technologies="React, CssBEM "
            />
            <ProjectItem
              projectImage={web3}
              projectUrl="/Web3/123"
              title="Hoobank"
              technologies="Tailwind, React"
            />

            <ProjectItem
              projectImage={reactWeatherApp}
              projectUrl="/React/123"
              title="E-commerce"
              technologies=" Html,CSS,Js,SEO"
            />

            <ProjectItem
              projectImage={cryptoo}
              projectUrl="/Crypto/123"
              title="ShopNow"
              technologies="Html,Css,Js,SEO"
            />

            <ProjectItem
              projectImage={airforce}
              projectUrl="/Summarizer/123"
              title="Explore"
              technologies="Html, CSS, Js"
            />

            <ProjectItem
              projectImage={dashboard}
              projectUrl="/Dashboard/123"
              title="UI/UX"
              technologies="Vite,Tailwind"
            />

            <ProjectItem
              projectImage={sweet}
              projectUrl="/Sweet/123"
              title="UI/UX"
              technologies="React,Css BEM"
            />

            <ProjectItem
              projectImage={glowing}
              projectUrl="/Glow/123"
              title="UI/UX"
              technologies="Html,Css,JS"
            />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Projects;
