import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAward,
  faCertificate,
  faBook,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  // Function to handle CV download
  const resumeUrl = "https://drive.google.com/file/d/1fWKDdQg0VeKH3IzDrfbLXJnGj9JFwPGc/view?usp=drive_link";
  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="p-4 lg:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen">
      {/* About Me Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center text-gray-800 dark:text-white mb-8 animate-fade-in">
        About Me
      </h1>

      {/* Section 1: Personal Info and Profiles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Subsection 1.1: Personal Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Personal Information</h2>
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Name:</span> Law Bind Pandey</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Age:</span> 25</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Phone:</span> +91 8019717994</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Email:</span> lawbindpandey01w@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-300"><span className="font-semibold">Current City:</span> Hyderabad, India 🇮🇳</p>
          </div>
        </div>

        {/* Subsection 1.2: Download CV */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Download CV</h2>
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>

        {/* Subsection 1.3: Profiles */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Profiles</h2>
          <div className="flex space-x-6">
            {/* GFG Profile */}
            <a
              href="https://www.geeksforgeeks.org/user/lawbindpandey01w/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20231228172727/gfg-image.jpg"
                alt="GFG Profile"
                className="w-20 h-20 rounded-full"
              />
            </a>

            {/* LeetCode Profile */}
            <a
              href="https://leetcode.com/u/w_pandey_ji/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition duration-300"
            >
              <img
                src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                alt="LeetCode Profile"
                className="w-20 h-20 rounded-full"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Section 2: Technical Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Subsection 2.1: AI/ML Skills */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">AI/ML Skills</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikit-learn/scikit-learn-original.svg" alt="Scikit-Learn" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" alt="OpenCV" className="w-12 h-12" />
          </div>
        </div>

        {/* Subsection 2.2: Web Development Skills */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Web Development Skills</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" className="w-12 h-12" />
          </div>
        </div>

        {/* Subsection 2.3: Others */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Others</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-12 h-12" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Section 3: Certifications and Awards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Subsection 3.1: Certifications */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Certifications</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mr-2" />
              <a
                href="https://www.coursera.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Machine Learning by Coursera
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mr-2" />
              <a
                href="https://www.deeplearning.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Deep Learning Specialization by deeplearning.ai
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCertificate} className="text-blue-500 mr-2" />
              <a
                href="https://www.udemy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Full Stack Web Development by Udemy
              </a>
            </li>
          </ul>
        </div>

        {/* Subsection 3.2: Awards */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Awards</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faAward} className="text-yellow-500 mr-2" />
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Best Project Award at University
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faAward} className="text-yellow-500 mr-2" />
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Hackathon Winner 2022
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faAward} className="text-yellow-500 mr-2" />
              <a
                href="https://www.example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Outstanding Performance in AI/ML
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 4: Publications */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Publications</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-green-500 mr-2" />
            <a
               href="https://drive.google.com/file/d/1qnoBkob-OJCt7AF2c1ZQ8cSJzAzFu-zE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              "Image Scenario Description
            </a>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faBook} className="text-green-500 mr-2" />
            <a
              href="https://www.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              "Machine Learning for Predictive Analytics" - Presented at AI Conference, 2022
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;