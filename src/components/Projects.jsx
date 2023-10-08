"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import reactWeatherApp from "../../public/assets/reactweather.png";
import commercial from "../../public/assets/commercial.png";
import dashboard from "../../public/assets/dashboard.png";
import jsweather from "../../public/assets/jsweather.png";
import newsletter from "../../public/assets/newsletter.png";
import summarizer from "../../public/assets/summarizer.png";
import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#12BCDA] ">
          Projects
        </p>
        <h2 className="py-4">
          What I've Built
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              projectImage={reactWeatherApp}
              projectUrl="/react/123"
              title="Reac Weather App"
              technologies=" Html, Css, React"
            />

            <ProjectItem
              projectImage={jsweather}
              projectUrl="/jsweather/123"
              title="JavaScript Weather App"
              technologies=" Html, Css, Js"
            />

            <ProjectItem
              projectImage={newsletter}
              projectUrl="/newsletter/123"
              title="NewsLetter App"
              technologies=" Html, Css, Js"
            />

            <ProjectItem
              projectImage={summarizer}
              projectUrl="/summarizer/123"
              title="React Weather App"
              technologies=" Html, Css, React Tailwind , Vite"
            />

            <ProjectItem
              projectImage={commercial}
              projectUrl="/commercial/123"
              title="Commercial App"
              technologies=" Html, Css, Js"
            />

            <ProjectItem
              projectImage={dashboard}
              projectUrl="/dashboard/123"
              title="React Weather App"
              technologies="React,Tailwind,Syncfusion"
            />
          </div>
        </h2>
      </div>
    </div>
  );
};

export default Projects;
