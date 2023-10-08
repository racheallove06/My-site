import React from "react";
import Image from "next/image";
import SkillsItem from "./SkillsItem";
import html from "../../public/assets/html.png";
import css from "../../public/assets/css.png";
import javascript from "../../public/assets/javascript.png";
import react from "../../public/assets/react.png";
import nextjs from "../../public/assets/nextjs.png";
import redux from "../../public/assets/Redux.jpeg";
import tailwind from "../../public/assets/tailwind.png";
import vue from "../../public/assets/Vue.svg";
import bootstrap from "../../public/assets/Bootstrap.svg";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#12BCDA]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillsItem skillImage={html} text="Html" />
          <SkillsItem skillImage={css} text="CSS" />
          <SkillsItem skillImage={javascript} text="JAVASCRIPT" />
          <SkillsItem skillImage={react} text="REACT" />
          <SkillsItem skillImage={nextjs} text="NEXT.JS" />
          <SkillsItem skillImage={redux} text="REDUX" />
          <SkillsItem skillImage={tailwind} text="TAILWIND" />
          <SkillsItem skillImage={vue} text="VUE" />
          <SkillsItem skillImage={bootstrap} text="BOOTSTRAP" />
          <SkillsItem skillImage={html} text="Html" />
          <SkillsItem skillImage={html} text="Html" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
