import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import SocialMedia from "../miniComponent/SocialMedia";
import { IoMdMailUnread } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Sonu <span className="text-primary">Kumar</span>
            </h1>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6 gap-2">
          <Link
            to="/"
            className="flex items-center hover:text-primary transition-all text-gray-800 font-semibold"
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center hover:text-primary transition-all text-gray-800 font-semibold"
          >
            <IoPerson className="mr-2" /> About
          </Link>
          <Link
            to="/contact"
            className="flex items-center hover:text-primary transition-all text-gray-800 font-semibold"
          >
            <IoMdMailUnread className="mr-2" />
            Contact
          </Link>
          <Link
            to="/project"
            className="flex items-center hover:text-primary transition-all text-gray-800 font-semibold"
          >
            <GrProjects className="mr-2" /> Projects
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl text-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`${
          isOpen
            ? "fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
            : "hidden"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full flex flex-col justify-between items-center bg-white p-6 z-20 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex  flex-col ml-3 gap-2 space-y-4 mt-10  ">
          <Link
            to="/"
            className="flex items-center hover:text-primary transition-all text-gray-800 text-lg font-semibold  w-full"
            onClick={closeMenu}
          >
            <FaHome className="mr-2" /> Home
          </Link>
          <Link
            to="/about"
            className="flex items-center hover:text-primary transition-all text-gray-800 text-lg font-semibold w-full"
            onClick={closeMenu}
          >
            <IoPerson className="mr-2" /> About
          </Link>
          <Link
            to="/contact"
            className="flex items-center hover:text-primary transition-all text-gray-800 text-lg font-semibold  w-full"
            onClick={closeMenu}
          >
            <IoMdMailUnread className="mr-2" />
            Contact
          </Link>
          <Link
            to="/project"
            className="flex items-center hover:text-primary transition-all text-gray-800 text-lg font-semibold  w-full"
            onClick={closeMenu}
          >
            <GrProjects className="mr-2" /> Projects
          </Link>
        </div>
        <div className="font-[12px]">
          <SocialMedia />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
