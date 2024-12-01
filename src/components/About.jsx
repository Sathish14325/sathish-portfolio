import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import "../components/css/about.css";

import SathishImg from "../assets/images/sathish2.jpg";

AOS.init();

const About = () => {
  const boxStyle = {
    background: `url(${SathishImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "370px",
    width: "370px",
    boxShadow: "0 20px 5px 5px rgba(0, 0, 0, 0.2)",
    animation: "animate 5s ease-in-out infinite",
    transition: "all 1s ease-in-out",
  };

  return (
    <section
      className="bg-[#000336] text-white pb-5 border-t border-violet-900 my-8 lg:my-10"
      id="About"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-3 text-xl rounded-md">
            About Me
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-5">
        <div className="basis-1/2 container mx-auto px-5">
          <p className="text-center text-teal-400 font-bold uppercase">
            Who I am
          </p>
          <p className="mt-4 text-lg text-center">
            Hey there, I'm Sathish! 👋 As a Full Stack Developer with a passion
            for building efficient and user-friendly web applications, I
            specialize in MERN stack development. 🚀 My core skills revolve
            around JavaScript (🌐), and I love crafting solutions using
            technologies like React, Node.js, Express, and MongoDB. 💻 Let’s
            create something awesome together! 💫 I’m open to job opportunities
            that match my expertise and enthusiasm. 💼✨
            {/* <ul className="my-2">
              <li>
                <span className="font-bold">Skills:</span> JavaScript ⚙️ |React
                ⚛️ | Node.js 🔥 | Express.js 🖥️ |MongoDB 📊{" "}
              </li>
              <li>
                <span className="font-bold">Tools:</span> GitHub 🔑| VS Code 🧑‍💻
                | Figma 🎨 | Tailwind CSS 🪄{" "}
              </li>
              <li>
                <span className="font-bold">Passion:</span> Problem-solving🧩 |
                Self-learning 📚 | Team Collaboration 🤝
              </li>
            </ul> */}
          </p>
        </div>

        <div className="basis-1/2 flex justify-center items-center">
          <div className="animation-wrapper">
            <div style={boxStyle}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
