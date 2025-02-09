import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-teal-50 dark:bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Portfolio Name */}
        <Link to="/" className="text-gray-800 dark:text-white text-xl font-bold">
          My Portfolio
        </Link>

        {/* Navigation Links (Desktop) and Theme Toggle */}
        <div className="flex items-center space-x-6">
          {/* Navigation Links (Desktop) */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              Projects
            </Link>
            <Link to="/blogs" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              Blogs
            </Link>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="text-gray-800 dark:text-white lg:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu (Collapsible) */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4">
          <Link to="/" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2">
            Home
          </Link>
          <Link to="/about" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2">
            About Me
          </Link>
          <Link to="/projects" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2">
            Projects
          </Link>
          <Link to="/blogs" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2">
            Blogs
          </Link>
          <Link to="/contact" className="block text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 p-2">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;