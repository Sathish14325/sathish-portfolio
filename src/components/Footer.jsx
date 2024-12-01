import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000336] text-white py-4 border-t border-indigo-900">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4">
          <p className="text-lg md:text-base animate-fadeIn">
            <FaRegCopyright style={{ display: "inline-block" }} /> Developer
            Portfolio by{" "}
            <span className="font-semibold text-blue-400 uppercase hover:text-pink-300 transition duration-300">
              Sathish
            </span>
          </p>
          <a
            href="https://github.com/Sathish14325/"
            target="_blank"
            className="flex items-center md:text-base transition duration-300 animate-bounce"
          >
            <FaRegStarHalf style={{ display: "inline-block" }} /> Star
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
