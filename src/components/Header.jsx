import React from "react";
import Logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <img
            className="logo-img"
            src={Logo}
            width={60}
            height={60}
            alt="logo"
            align="CENTER"
          />
          <span className="ml-3 text-xl">FreeChat</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customPink" : ""
              } hover:text-white`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customPink" : ""
              } hover:text-white`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customPink" : ""
              } hover:text-white`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `mr-5 duration-200 ${
                isActive ? "text-customPink" : ""
              } hover:text-white`
            }
          >
            About
          </NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
