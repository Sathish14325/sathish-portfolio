import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import projectsData from "../utils/data/project.js";
import EasyShop from "../assets/images/projects/EasyShop.png";
import ChatNest from "../assets/images/projects/chatNest.png";
import CountryScope from "../assets/images/projects/CountryScope.png";
import EmployeeTrack from "../assets/images/projects/EmployeeTrack.png";
import Blog from "../assets/images/projects/Blog.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      name: "EasyShop",
      description:
        "A feature-rich e-commerce platform built to provide a seamless shopping experience for users while offering robust management tools for admins. This platform is designed with modern web technologies, ensuring high performance, security, and scalability.",
      tools: [
        "React",
        "Redux",
        "Bootstrap",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Razorpay",
      ],
      Github: "https://github.com/Sathish14325/Easy-Shop",
      image: EasyShop,
    },
    {
      id: 2,
      name: "ChatNest",
      description:
        "A Full Stack Chatting App that provides real-time communication between users. This application is built with modern web technologies and ensures secure data storage and transmission.",
      tools: [
        "React",
        "Redux",
        "Bootstrap",
        "Chakra Ui",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "JWT",
      ],
      Github: "https://github.com/Sathish14325/ChatNest",
      image: ChatNest,
    },
    {
      id: 3,
      name: "EmployeeTrack",
      description:
        "A Full Stack Chatting App that provides real-time communication between users. This application is built with modern web technologies and ensures secure data storage and transmission.",
      tools: [
        "React",
        "Redux",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "NodeMailer",
      ],
      Github: "https://github.com/Sathish14325/employee-management-system",
      image: EmployeeTrack,
    },
    {
      id: 4,
      name: "CountryScope",
      description:
        "Country Scope is a React-based web application showcasing detailed country information using the REST Countries API. It includes features like search and region-based filtering for easy navigation. Built with Tailwind CSS, Axios, and responsive design principles, it ensures a seamless user experience. This project highlights my skills in API integration and modern web development.",
      tools: [
        "React",
        "Redux",
        "Bootstrap",
        "Chakra Ui",
        "Node.js",
        "Express.js",
        "MongoDB",
        "sockit.io",
      ],
      Github: "https://github.com/Sathish14325/Country_Scope",
      image: CountryScope,
    },
    {
      id: 5,
      name: "Blog website",
      description:
        "Blog Website is a full-stack application where users can create, view, edit, and delete blog posts. It includes features like category filtering, displaying the latest posts, and a responsive design for a seamless user experience. The project highlights your skills in building dynamic and interactive web applications with robust backend functionality. It showcases your expertise in delivering user-friendly platforms for content management.",
      tools: [
        "React",
        "Redux",
        "Bootstrap",
        "Chakra Ui",
        "Node.js",
        "Express.js",
        "MongoDB",
        "sockit.io",
      ],
      Github: "https://github.com/Sathish14325/Blog-Website-MERN",
      image: Blog,
    },
  ];

  console.log(projectsData);

  return (
    <div id="Projects">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Projects
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <section className="py-12 bg-[#000336]">
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-[#000336] border border-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-300 mt-3">{project.description}</p>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-400">Tools:</h4>
                    <ul className="flex flex-wrap gap-2 mt-2">
                      {project.tools.map((tool, index) => (
                        <li
                          key={index}
                          className="bg-gray-700 text-sm text-white px-3 py-1 rounded"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    <a
                      href={project.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
