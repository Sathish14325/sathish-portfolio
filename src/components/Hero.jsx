import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS for animations
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaDownload } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import resumeFile from "../assets/sathish_resume.pdf";

import SathishImg from "../assets/images/sathish_img.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <main id="Home" className="main-wrapper">
      <div className="container mx-auto px-4 py-24">
        <div
          className="row flex flex-col lg:flex-row justify-between items-center"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          {/* Left Column */}
          <div
            className="col-lg-6 text-white"
            data-aos="fade-down-right"
            data-aos-duration="2000"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-snug">
              <span className="block">Hello,</span>
              <span className="block">
                I&apos;m{" "}
                <span className="text-pink-700 font-bold">SATHISH</span>,
                Skilled in
              </span>
              <span className="block text-teal-400 text-3xl md:text-4xl mt-3">
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "Web Designer",
                      "SEO Analyst",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Front end developer")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .deleteAll()
                      .callFunction(() => {
                        console.log("All strings were deleted");
                      })
                      .start();
                  }}
                />
              </span>
            </h1>
            <div
              className="icons flex gap-4 mt-6"
              id="icons"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <a
                href="https://github.com/Sathish14325/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-pink-700 hover:text-blue-700 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sathish0527/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-pink-700 hover:text-blue-700 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/star.sathish_143/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-pink-700 hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/starsathish143/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-5xl text-pink-700 hover:text-blue-500 transition-transform transform hover:scale-110"
              >
                <FaSquareXTwitter />
              </a>
            </div>
            <div className="btns mt-6 flex gap-4">
              <a
                href="#Contact"
                className="bg-pink-700 text-md md:text-lg font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                Contact Me <MdContacts />
              </a>
              <a
                href={resumeFile}
                download={"Sathish_Resume.pdf"}
                className="bg-blue-700 text-md md:text-lg font-semibold text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center gap-2"
              >
                Resume <FaDownload />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div
            className="col-lg-6 p-2 md:p-5 text-center mt-8 lg:mt-0"
            data-aos="fade-down-top"
            data-aos-duration="1000"
          >
            <img
              src={SathishImg}
              alt="sathish-img"
              className="w-72 h-72 md:w-96 md:h-96 border-4 border-white rounded-lg mx-auto shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
              id="sathish-img"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
