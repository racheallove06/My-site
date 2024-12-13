import React from "react";
import Image from "next/image";
import SkillsItem from "./SkillsItem";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import javascript from "../../public/assets/javascript.png";
import react from "../../public/assets/react.png";
import nextjs from "../../public/assets/nextjs.png";
import redux from "../../public/assets/Redux.svg";
import tailwind from "../../public/assets/tailwind.png";
import bootstrap from "../../public/assets/Bootstrap.svg";
import material from "../../public/assets/Material.svg";
import vue from "../../public/assets/mongo.svg";
import sass from "../../public/assets/Sass.svg";
import ts from "../../public/assets/sanity.svg";
import cloud from "../../public/assets/cloud.svg";


const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#12BCDA]">
          Skills
        </p>
        <h2 className="mt-3">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillImage={html} text="Html" />
          <SkillsItem skillImage={css} text="CSS" />
          <SkillsItem skillImage={javascript} text="JAVASCRIPT" />
          <SkillsItem skillImage={react} text="REACT" />
          <SkillsItem skillImage={nextjs} text="NEXT.JS" />
          <SkillsItem skillImage={redux} text="REDUX" />
          <SkillsItem skillImage={tailwind} text="TAILWIND" />
          <SkillsItem skillImage={material} text="MATERIAL UI" />
          <SkillsItem skillImage={bootstrap} text="BOOTSTRAP" />
          <SkillsItem skillImage={vue} text="MONGO" />
          <SkillsItem skillImage={ts} text="SANITY" />
          <SkillsItem skillImage={sass} text="SASS" />
           <SkillsItem skillImage={cloud} text="CLOUD" />
          <SkillsItem skillImage={mongodb} text="MONGODB" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
