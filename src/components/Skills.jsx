import React from "react";
import { skillsData } from "../utils/data/skills";
import Marquee from "react-fast-marquee";

import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import javascript from "../assets/images/skills/javascript.svg";
import react from "../assets/images/skills/react.svg";
import nextjs from "../assets/images/skills/nextJS.svg";
import aws from "../assets/images/skills/aws.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import docker from "../assets/images/skills/docker.svg";
import figma from "../assets/images/skills/figma.svg";
import materialui from "../assets/images/skills/materialui.svg";
import mongodb from "../assets/images/skills/mongoDB.svg";
import tailwind from "../assets/images/skills/tailwind.svg";
import vitejs from "../assets/images/skills/vitejs.svg";
import fireBase from "../assets/images/skills/firebase.svg";
import nodeJs from "../assets/images/skills/nodeJs.svg";
import express from "../assets/images/skills/expressJs.svg";
import git from "../assets/images/skills/git.svg";

const Skills = () => {
  // console.log(skillsImage);

  const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();

    switch (skillID) {
      case "html":
        return html;
      case "css":
        return css;
      case "javascript":
        return javascript;
      case "react":
        return react;
      case "nextjs":
        return nextjs;
      case "aws":
        return aws;
      case "bootstrap":
        return bootstrap;
      case "figma":
        return figma;
      case "git":
        return git;
      case "materialui":
        return materialui;
      case "mongodb":
        return mongodb;
      case "tailwind":
        return tailwind;
      case "vitejs":
        return vitejs;
      case "docker":
        return docker;
      case "firebase":
        return fireBase;
      case "nodejs":
        return nodeJs;
      case "expressjs":
        return express;
      default:
        break; // Provide a fallback image
    }
  };

  return (
    <div id="Skills" className="relative z-50 border-t border-[#25213b] py-3">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#1a1443] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skillsImage(skill)}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;
