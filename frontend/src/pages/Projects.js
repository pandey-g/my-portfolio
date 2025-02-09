import React from 'react';

const Projects = () => {
  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
        Projects
      </h1>
      <ul className="list-disc list-inside">
        <li className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
          Project 1: Portfolio Website
        </li>
        <li className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
          Project 2: Blogging Platform
        </li>
        <li className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
          Project 3: E-commerce App
        </li>
      </ul>
    </div>
  );
};

export default Projects;