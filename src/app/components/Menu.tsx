"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // React Icons for Menu and Close

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#060b1a] shadow-lg  text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-5xl text-[#E8E8E8] font-bold"> <span className="text-[#F4D35E]"> P</span>ortfolio</h1>

        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <FiX className="text-3xl text-white" />
            ) : (
              <FiMenu className="text-3xl text-white" />
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <nav
          className={`fixed top-0 right-0 h-full bg-gray-800 text- w-64 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 md:relative md:translate-x-0 md:w-auto md:bg-transparent md:flex`}
        >
        <div className="md:hidden mt-6">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? (
              <FiX className="text-3xl text-white" />
            ) : (
              <FiMenu className="text-3xl text-white" />
            )}
          </button>
        </div>

          <ul className="flex flex-col text-[22px] mr-20 space-y-6 p-6 md:flex-row md:space-y-0 md:space-x-12 md:p-0">
            <li>
              <a
                href="#home"
                className="hover:text-yellow-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition duration-200"
              >
                About
              </a>
            </li>
          
            {/* <li>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition duration-200"
              >
                 Skills
              </a>
            </li>
 */}
            <li>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition duration-200"
              >
               Projects
              </a>
            </li>
            {/* <li>
              <a
                href="#services"
                className="hover:text-yellow-400 transition duration-200"
              >
                Services
              </a>
            </li> */}

            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

