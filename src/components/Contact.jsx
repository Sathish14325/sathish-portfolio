import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div id="Contact">
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
            Contacts
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="bg-[#000336] text-white p-8 md:p-20 flex flex-col md:flex-row justify-between md:justify-around items-center md:items-start">
        {/* Contact Info Section */}
        <div className="mb-10 md:mb-0">
          <ul className="space-y-5 text-2xl">
            <li>
              <span className="font-semibold">Phone:</span> +91-9994658021
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              sathishshankar631@gmail.com
            </li>
            <li>
              <span className="font-semibold">Location:</span> Chennai, Tamil
              Nadu
            </li>
          </ul>
        </div>

        {/* Social Media Links Section */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Follow Me</h2>
          <div className="flex space-x-8 text-pink-500">
            <a
              href="https://github.com/Sathish14325"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://www.linkedin.com/in/sathish0527/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://www.instagram.com/star.sathish_143/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaInstagram size={50} />
            </a>
            <a
              href="https://twitter.com/starsathish143/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-300"
            >
              <FaTwitter size={50} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
