import html from "../assets/images/skills/html.svg";
import css from "../assets/images/skills/css.svg";
import javascript from "../assets/images/skills/javascript.svg";
import react from "../assets/images/skills/react.svg";
import nextjs from "../assets/images/skills/nextJs.svg";
import aws from "../assets/images/skills/aws.svg";
import bootstrap from "../assets/images/skills/bootstrap.svg";
import docker from "../assets/images/skills/docker.svg";
import figma from "../assets/images/skills/figma.svg";
import materialui from "../assets/images/skills/materialui.svg";
import mongodb from "../assets/images/skills/mongoDB.svg";
import tailwind from "../assets/images/skills/tailwind.svg";
import vitejs from "../assets/images/skills/vitejs.svg";
import git from "../assets/images/skills/git.svg";

export const skillsImage = (skill) => {
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
    default:
      break; // Provide a fallback image
  }
};
