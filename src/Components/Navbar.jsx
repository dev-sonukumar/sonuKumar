import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-white z-10 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              {" "}
              frontend <span>Insider</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="hover:text-gray-300 font-semibold">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 font-semibold">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 font-semibold">
            Contact
          </Link>
          <Link to="/project" className="hover:text-gray-300 font-semibold">
            Projects
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 ">
          <Link
            to="/"
            className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
          >
            Contact
          </Link>

          <Link
            to="/project"
            className="block py-2 px-4 text-sm hover:bg-gray-700 hover:text-white"
          >
            Projects
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
