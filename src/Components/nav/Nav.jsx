/* eslint-disable react/jsx-key */

import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Contact" },
    { id: 4, title: "Projects" },
    { id: 4, title: "GitHub" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 bg-white z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              frontend <span>Insider</span>
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex gap-2">
            {menuItems.map((menu) => (
              <li className="flex">
                <Link
                  to={`#${menu.title}`}
                  className="hover:text-gray-300 font-semibold"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col  text-left mb-4">
            {menuItems.map((menu) => (
              <li className="flex pl-2 mr-auto my-1 ">
                <Link
                  to={`#${menu.title}`}
                  className="hover:text-gray-300 font-semibold"
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
