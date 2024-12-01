import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showSideBar = () => setIsSidebarOpen(true);
  const hideSideBar = () => setIsSidebarOpen(false);

  return (
    <header className="bg-[#000336] text-white border-b border-indigo-900">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link
            id="logo"
            to="/"
            className="text-4xl uppercase text-[#5eead4] hover:text-pink-700"
          >
            Sathish
          </Link>
        </div>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-lg font-semibold">
            <li>
              <a href="#Home" className="hover:text-pink-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="hover:text-pink-400 hover:underline">
                About
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#Exprience"
                className="hover:text-pink-400 hover:underline"
              >
                Exprience
              </a>
            </li>
            <li>
              <a href="#Skills" className="hover:text-pink-400 hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="hover:text-pink-400 hover:underline"
              >
                Projects
              </a>
            </li>
            <li>
              {" "}
              <a
                href="#Education"
                className="hover:text-pink-400 hover:underline"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-pink-400 hover:underline"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu Button for Mobile Screens */}
        <button
          onClick={showSideBar}
          className="lg:hidden text-2xl focus:outline-none"
        >
          <i className="fa-solid fa-bars">
            <RiMenu3Fill />
          </i>
        </button>
      </div>

      {/* Sidebar for Mobile Screens */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-[#000336] bg-opacity-75 backdrop-blur-md z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col p-6 gap-6 text-lg font-semibold">
          <li>
            <button
              onClick={hideSideBar}
              className="text-2xl text-white focus:outline-none"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </li>
          <li>
            <a
              href="#Home"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Exprience"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Exprience
            </a>
          </li>
          <li>
            <a
              href="#Skills"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Education"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="hover:text-pink-400 transition-colors duration-200"
              onClick={hideSideBar}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={hideSideBar}
        ></div>
      )}
    </header>
  );
};

export default Header;
